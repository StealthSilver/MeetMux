"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/sections/Navbar";
import { Footer } from "../components/sections/Footer";

export default function CareersPage() {
  return (
    <main className="bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Navbar */}
      <Navbar />

      {/* Hero / Intro Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-primary font-bold leading-tight mb-6"
        >
          Join Our Journey,{" "}
          <span
            className="
              bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500
              bg-clip-text text-transparent animate-gradient-move
            "
          >
            Shape the Future
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl font-secondary max-w-3xl text-gray-700 dark:text-gray-300 mb-12"
        >
          At Meet-Mux, we’re more than just a workplace — we’re a community of
          innovators, problem-solvers, and dreamers who believe in making a real
          impact. Here, your ideas matter, your growth is valued, and your work
          helps shape the world we’re building. Step into a space where passion
          meets purpose, and together, let’s create something extraordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="#signup"
            className="px-8 py-4 font-secondary text-center rounded-full border border-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all duration-300 backdrop-blur-sm bg-opacity-10 bg-white dark:bg-opacity-10 dark:bg-transparent hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-[var(--color-foreground)]"
          >
            Start Your Journey with MeetMux
          </Link>
        </motion.div>
      </section>

      {/* Sign Up Form Section */}
      <section
        id="signup"
        className="py-20 px-6 flex flex-col items-center justify-center text-center bg-[var(--color-background)] border-t border-[var(--color-foreground)]/10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-primary font-bold mb-10"
        >
          Create Your Account
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="w-full max-w-md bg-white/50 dark:bg-black/20 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col gap-6 text-left"
        >
          {/* First Name */}
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="font-secondary mb-2 text-sm text-gray-700 dark:text-gray-300"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--color-foreground)]"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="font-secondary mb-2 text-sm text-gray-700 dark:text-gray-300"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--color-foreground)]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="font-secondary mb-2 text-sm text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--color-foreground)]"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="font-secondary mb-2 text-sm text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--color-foreground)]"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              type="submit"
              className="w-full sm:w-1/2 px-6 py-3 rounded-full font-secondary bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-all duration-300"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="w-full sm:w-1/2 px-6 py-3 rounded-full font-secondary border border-[var(--color-foreground)] text-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all duration-300"
            >
              Sign Up as College
            </button>
          </div>
        </motion.form>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
