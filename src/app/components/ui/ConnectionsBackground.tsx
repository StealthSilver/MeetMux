"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  color: string;
}

interface Connection {
  from: number;
  to: number;
  color: string;
  opacity: number;
}

const colors = [
  "#8b5cf6", // Purple
  "#ec4899", // Pink
  "#06b6d4", // Cyan
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#ef4444", // Red
  "#6366f1", // Indigo
  "#84cc16", // Lime
];

export default function ConnectionsBackground() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const { theme } = useTheme();

  // Initialize nodes and connections
  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Create nodes when dimensions are available
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const nodeCount = Math.max(
      12,
      Math.min(25, Math.floor((dimensions.width * dimensions.height) / 50000))
    );
    const newNodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      newNodes.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Create random connections
    const newConnections: Connection[] = [];
    const maxConnections = Math.floor(nodeCount * 0.8);

    for (let i = 0; i < maxConnections; i++) {
      const from = Math.floor(Math.random() * nodeCount);
      let to = Math.floor(Math.random() * nodeCount);

      // Ensure we don't connect to itself
      while (to === from) {
        to = Math.floor(Math.random() * nodeCount);
      }

      // Check if connection already exists
      const existingConnection = newConnections.find(
        (conn) =>
          (conn.from === from && conn.to === to) ||
          (conn.from === to && conn.to === from)
      );

      if (!existingConnection) {
        const connectionColor =
          colors[Math.floor(Math.random() * colors.length)];
        newConnections.push({
          from,
          to,
          color: connectionColor,
          opacity: Math.random() * 0.6 + 0.2,
        });

        // Add bidirectional connection tracking
        newNodes[from].connections.push(to);
        newNodes[to].connections.push(from);
      }
    }

    setNodes(newNodes);
    setConnections(newConnections);
  }, [dimensions]);

  // Animate nodes
  useEffect(() => {
    if (nodes.length === 0) return;

    const animateNodes = () => {
      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          let newX = node.x + node.vx;
          let newY = node.y + node.vy;
          let newVx = node.vx;
          let newVy = node.vy;

          // Bounce off walls
          if (newX <= 0 || newX >= dimensions.width) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(dimensions.width, newX));
          }
          if (newY <= 0 || newY >= dimensions.height) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(dimensions.height, newY));
          }

          return {
            ...node,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        })
      );
    };

    const interval = setInterval(animateNodes, 50);
    return () => clearInterval(interval);
  }, [nodes.length, dimensions]);

  // Animate connection opacity
  useEffect(() => {
    if (connections.length === 0) return;

    const animateConnections = () => {
      setConnections((prevConnections) =>
        prevConnections.map((conn) => ({
          ...conn,
          opacity:
            Math.sin(Date.now() * 0.001 + conn.from + conn.to) * 0.3 + 0.4,
        }))
      );
    };

    const interval = setInterval(animateConnections, 100);
    return () => clearInterval(interval);
  }, [connections.length]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none connections-background">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ opacity: theme === "dark" ? 0.5 : 0.7 }}
      >
        <defs>
          {colors.map((color, index) => (
            <radialGradient key={index} id={`nodeGradient-${index}`}>
              <stop offset="0%" stopColor={color} stopOpacity="0.8" />
              <stop offset="100%" stopColor={color} stopOpacity="0.2" />
            </radialGradient>
          ))}
        </defs>

        {/* Render connections */}
        {connections.map((connection, index) => {
          const fromNode = nodes[connection.from];
          const toNode = nodes[connection.to];

          if (!fromNode || !toNode) return null;

          return (
            <motion.line
              key={`connection-${index}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={connection.color}
              strokeWidth="1"
              strokeOpacity={connection.opacity}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          );
        })}

        {/* Render nodes */}
        {nodes.map((node, index) => (
          <motion.g key={`node-${node.id}`}>
            {/* Outer glow */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill={`url(#nodeGradient-${colors.indexOf(node.color)})`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{
                delay: index * 0.05,
                duration: 0.8,
                ease: "easeOut",
              }}
            />
            {/* Core node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill={node.color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: index * 0.05 + 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
            />
            {/* Pulse effect */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill="none"
              stroke={node.color}
              strokeWidth="2"
              strokeOpacity="0"
              animate={{
                r: [3, 12, 3],
                strokeOpacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
