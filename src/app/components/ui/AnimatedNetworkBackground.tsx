"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface Node {
  id: number;
  x: number;
  y: number;
  color: string;
}

interface Connection {
  id: string;
  from: number;
  to: number;
  color: string;
  createdAt: number;
  isAnimating: boolean;
  isVisible: boolean;
}

const colors = [
  "#8b5cf6", //
  "#ec4899", //
  "#06b6d4", //
  "#10b981", //
  "#f59e0b", //
  "#6366f1", //
];

export default function AnimatedNetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [connectedPairs, setConnectedPairs] = useState<Set<string>>(new Set());
  const { theme } = useTheme();

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const isMobile = window.innerWidth < 640;
    const nodeCount = isMobile ? 14 : 30;
    const newNodes: Node[] = [];
    const padding = 20;

    for (let i = 0; i < nodeCount; i++) {
      newNodes.push({
        id: i,
        x: padding + Math.random() * (dimensions.width - padding * 2),
        y: padding + Math.random() * (dimensions.height - padding * 2),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setNodes(newNodes);
  }, [dimensions]);

  const createNewConnection = useCallback(() => {
    if (nodes.length < 2) return null;

    let from: number, to: number;
    let attempts = 0;
    const maxAttempts = 100;

    do {
      from = Math.floor(Math.random() * nodes.length);
      to = Math.floor(Math.random() * nodes.length);
      attempts++;

      const pairId = from < to ? `${from}-${to}` : `${to}-${from}`;

      if (from !== to && !connectedPairs.has(pairId)) {
        setConnectedPairs((prev) => new Set(prev).add(pairId));

        const connectionColor =
          colors[Math.floor(Math.random() * colors.length)];
        return {
          id: `${from}-${to}-${Date.now()}`,
          from,
          to,
          color: connectionColor,
          createdAt: Date.now(),
          isAnimating: true,
          isVisible: true,
        };
      }
    } while (attempts < maxAttempts);

    return null;
  }, [nodes, connectedPairs]);

  useEffect(() => {
    if (nodes.length === 0) return;

    const createNewConnections = () => {
      for (let i = 0; i < 2; i++) {
        const newConnection = createNewConnection();
        if (newConnection) {
          setConnections((prev) => [...prev, newConnection]);

          setTimeout(() => {
            setConnections((prev) =>
              prev.map((conn) =>
                conn.id === newConnection.id
                  ? { ...conn, isAnimating: false }
                  : conn
              )
            );
          }, 4000);
        }
      }
    };

    setTimeout(() => {
      createNewConnections();
    }, 3000);

    const intervalId = setInterval(() => {
      createNewConnections();
    }, 8000 + Math.random() * 4000);

    return () => clearInterval(intervalId);
  }, [nodes, createNewConnection]);

  useEffect(() => {
    setConnections([]);
    setConnectedPairs(new Set());
  }, [nodes]);

  const getNodePosition = (nodeId: number) => {
    const node = nodes[nodeId];
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ opacity: theme === "dark" ? 0.3 : 0.4 }}
      >
        <defs>
          {colors.map((color, index) => (
            <radialGradient key={index} id={`glow-${index}`}>
              <stop offset="0%" stopColor={color} stopOpacity="1" />
              <stop offset="30%" stopColor={color} stopOpacity="0.6" />
              <stop offset="70%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </radialGradient>
          ))}

          {colors.map((color, index) => (
            <filter
              key={index}
              id={`glow-filter-${index}`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ))}

          {colors.map((color, index) => (
            <filter key={index} id={`shadow-${index}`}>
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="4"
                floodColor={color}
                floodOpacity="0.8"
              />
            </filter>
          ))}
        </defs>

        {connections.map((connection) => {
          const fromPos = getNodePosition(connection.from);
          const toPos = getNodePosition(connection.to);
          if (!fromPos || !toPos) return null;

          return (
            <motion.line
              key={connection.id}
              x1={fromPos.x}
              y1={fromPos.y}
              x2={toPos.x}
              y2={toPos.y}
              stroke={connection.color}
              strokeWidth="1.5"
              strokeOpacity={connection.isAnimating ? "0" : "0.6"}
              strokeLinecap="round"
              filter={`url(#glow-filter-${colors.indexOf(connection.color)})`}
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: connection.isAnimating ? [0, 0.8, 0.6] : 0.6,
                strokeOpacity: connection.isAnimating ? [0, 0.7, 0.6] : 0.6,
              }}
              transition={{
                pathLength: { duration: 4, ease: "easeInOut" },
                opacity: {
                  duration: connection.isAnimating ? 4.5 : 0.5,
                  times: connection.isAnimating ? [0, 0.4, 1] : undefined,
                },
                strokeOpacity: {
                  duration: connection.isAnimating ? 4.5 : 0.5,
                  times: connection.isAnimating ? [0, 0.4, 1] : undefined,
                },
              }}
            />
          );
        })}

        {nodes.map((node, index) => (
          <motion.g key={`node-${node.id}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="20"
              fill={`url(#glow-${colors.indexOf(node.color)})`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                delay: index * 0.1,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.circle
              cx={node.x}
              cy={node.y}
              r="5"
              fill={node.color}
              filter={`url(#shadow-${colors.indexOf(node.color)})`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: index * 0.08,
                duration: 1.2,
                ease: "easeOut",
              }}
            />

            <motion.circle
              cx={node.x}
              cy={node.y}
              r="2"
              fill="rgba(255, 255, 255, 0.6)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: index * 0.08 + 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
            />

            <motion.circle
              cx={node.x}
              cy={node.y}
              r="5"
              fill="none"
              stroke={node.color}
              strokeWidth="1.5"
              strokeOpacity="0"
              animate={{
                r: [5, 25, 5],
                strokeOpacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
