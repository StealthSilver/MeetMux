"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";

export const Footer = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <footer
      id="footer"
      className="relative border-t border-black/30 dark:border-white/30 overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)] py-12 px-4 sm:px-6"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <motion.img
            key={mounted ? theme : "default"}
            src="/logo.svg"
            alt="MeetMux logo"
            className="w-32 sm:w-40 h-auto mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <p className="text-gray-700 dark:text-gray-300 max-w-sm mb-4 sm:mb-6 text-sm sm:text-base"></p>

          <div className="flex gap-3 sm:gap-4">
            <Link
              href="https://www.linkedin.com/company/meetmux/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              <IconBrandLinkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </Link>
            <Link
              href="https://www.instagram.com/meetmux/#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              <IconBrandInstagram className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative z-10 pt-4 sm:pt-6 border-gray-300 dark:border-gray-700 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-4"
          >
            © 2024 MeetMux. All rights reserved <br />
            Contact:{" "}
            <Link
              href="mailto:support@meetmux.com"
              className="underline hover:text-[var(--color-foreground)]"
            >
              support@meetmux.com
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap gap-10 sm:gap-16 flex-1 justify-between text-sm sm:text-base w-full"
        >
          {[
            {
              title: "Product",
              links: ["Features", "How It Works", "Pricing", "FAQ"],
            },
            {
              title: "Support",
              links: ["Support", "Privacy Policy", "Terms of Use"],
            },
            {
              title: "Join Us",
              links: ["Career at MeetMux", "Become a Vendor"],
            },
          ].map((section, idx) => (
            <div key={idx} className="min-w-[120px]">
              <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-300">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="hover:text-[var(--color-foreground)] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
