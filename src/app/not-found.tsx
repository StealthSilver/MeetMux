"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="relative px-6 min-h-screen flex flex-col items-center justify-center
                 bg-[var(--color-background)] text-[var(--color-foreground)]
                 font-[var(--font-secondary)] backdrop-blur-md overflow-hidden
                 transition-colors duration-300"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 text-lg md:text-xl text-center max-w-xl font-[var(--font-secondary)] opacity-80"
      >
        Oops! The page you are looking for doesn’t exist or might have been
        moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-10"
      >
        <Link
          href="/"
          className="
            px-6 py-3 border border-[var(--color-foreground)]/40 rounded-full
            text-[var(--color-foreground)] hover:bg-[var(--color-foreground)]
            hover:text-[var(--color-background)] transition-colors
          "
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
  );
}
