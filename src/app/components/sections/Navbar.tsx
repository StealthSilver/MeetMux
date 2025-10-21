"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";
import { useTheme } from "next-themes";
import {
  Navbar as ResizableNavbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "../ui/ResizableNavbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsOpen((v) => !v);

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Features", link: "#features" },
    { name: "FAQ", link: "#faq" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "#footer" },
  ];

  return (
    <ResizableNavbar className="top-0">
      <NavBody className="font-secondary">
        <Link
          href="/"
          className="flex items-center cursor-pointer"
          prefetch={true}
        >
          <motion.img
            key={mounted ? theme : "default"}
            src="/logo.svg"
            alt="MeetMux logo"
            className="w-28 h-auto sm:w-32 md:w-36 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        <div
          className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {navItems.map((item) => (
            <div key={item.name} className="relative px-3 py-1.5 select-none">
              {hovered === item.name && (
                <motion.span
                  layoutId="hoverBg"
                  className="
                    absolute inset-0 rounded-full backdrop-blur-sm
                    bg-[var(--color-foreground)]/10 border border-[var(--color-foreground)]/20
                  "
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 40,
                    mass: 0.6,
                  }}
                  initial={false}
                />
              )}
              <Link
                href={item.link}
                onMouseEnter={() => setHovered(item.name)}
                onFocus={() => setHovered(item.name)}
                className="
                  relative z-10 transition-colors
                  text-[var(--color-foreground)]/80 hover:text-[var(--color-foreground)]
                "
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <motion.a
            href="#footer"
            className="
              relative rounded-full px-[1px] py-[1px] overflow-hidden
              transition-all duration-300 group
            "
            whileHover={{ scale: 1.05 }}
          >
            <span
              className="
                absolute inset-0 rounded-full
                bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500
                animate-border-move
              "
            ></span>

            <span
              className="
                relative z-10 block rounded-full px-6 py-1.5
                bg-transparent text-[var(--color-foreground)]
                transition-all duration-300
                group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500
                group-hover:text-white
              "
            >
              Get Started
            </span>
          </motion.a>
        </div>
      </NavBody>

      <MobileNav className="font-secondary">
        <MobileNavHeader>
          <Link
            href="/"
            className="flex items-center cursor-pointer"
            prefetch={true}
          >
            <motion.img
              key={mounted ? theme : "default"}
              src="/logo.svg"
              alt="MeetMux logo"
              className="w-28 h-auto sm:w-32 md:w-36 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          <div className="flex items-center gap-3">
            <div className="scale-90">
              <ThemeToggle />
            </div>
            <MobileNavToggle isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="transition-colors text-[var(--color-foreground)]/80 hover:text-[var(--color-foreground)]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <motion.a
            href="#footer"
            className="
              relative rounded-full px-[1px] py-[1px] overflow-hidden
              transition-all duration-300 group
            "
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(false)}
          >
            <span
              className="
                absolute inset-0 rounded-full
                bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500
                animate-border-move
              "
            ></span>
            <span
              className="
                relative z-10 block rounded-full px-6 py-1.5
                bg-transparent text-[var(--color-foreground)]
                transition-all duration-300
                group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500
                group-hover:text-white
              "
            >
              Get Started
            </span>
          </motion.a>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}
