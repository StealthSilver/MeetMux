"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedNetworkBackground from "../ui/AnimatedNetworkBackground";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-4 sm:p-6 bg-[var(--color-background)] text-[var(--color-foreground)] relative overflow-hidden">
      <div className="absolute inset-0 scale-[0.75] sm:scale-100 origin-center transition-transform duration-300">
        <AnimatedNetworkBackground />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto px-3 sm:px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-primary font-bold leading-tight mb-4 sm:mb-6"
        >
          Discover New{" "}
          {
            <>
              <span
                className="
                  relative inline-block
                  bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500
                  bg-[length:200%_200%]
                  bg-clip-text text-transparent
                  transition-all duration-500 ease-out
                  hover:animate-gradient-move
                "
              >
                Connections
              </span>
              <br />
              Around You
            </>
          }
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-base sm:text-lg md:text-xl font-secondary max-w-md sm:max-w-2xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-12"
        >
          Find people who are engaged in the activities happening around you.
          Discover everything you need in one app.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-10 w-full max-w-xs sm:max-w-2xl"
        >
          <Link
            href="https://apps.apple.com/in/app/meetmux/id6747908089"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-secondary text-sm sm:text-base text-center rounded-full border border-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all duration-300 backdrop-blur-sm bg-opacity-10 bg-white dark:bg-opacity-10 dark:bg-transparent hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-[var(--color-foreground)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 30 30"
              className="fill-current transition-colors duration-300"
            >
              <path
                d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 
      c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 
      c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 
      c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 
      c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 
      c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"
              ></path>
            </svg>
            Download for iOS
          </Link>

          <Link
            href="https://drive.google.com/file/d/1KE6YBubKQY6VTRdxZRgOqPLnoeT09s74/view"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-secondary text-sm sm:text-base text-center rounded-full border border-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all duration-300 backdrop-blur-sm bg-opacity-10 bg-white dark:bg-opacity-10 dark:bg-transparent hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 30 30"
              className="fill-current"
            >
              <path d="M 7.6230469 3.2109375 L 18 13.585938 L 20.677734 10.908203 C 17.018734 8.6882031 12.118063 5.7100938 9.9140625 4.3710938 L 8.4375 3.4765625 C 8.1765 3.3175625 7.8970469 3.2319375 7.6230469 3.2109375 z M 6.0390625 4.453125 C 6.0180625 4.567125 6 4.6816875 6 4.8046875 L 6 25.308594 C 6 25.394594 6.0172969 25.474641 6.0292969 25.556641 L 16.585938 15 L 6.0390625 4.453125 z M 22.4375 11.976562 L 19.414062 15 L 22.384766 17.970703 C 23.958766 17.016703 25.048922 16.35425 25.169922 16.28125 C 25.704922 15.95425 26.007047 15.460875 25.998047 14.921875 C 25.990047 14.392875 25.687828 13.919906 25.173828 13.628906 C 25.058828 13.562906 23.9835 12.913563 22.4375 11.976562 z M 18 16.414062 L 7.6542969 26.759766 C 7.8552969 26.724766 8.0560469 26.664828 8.2480469 26.548828 C 8.5140469 26.386828 15.7 22.027062 20.625 19.039062 L 18 16.414062 z"></path>
            </svg>
            Download for Android
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
