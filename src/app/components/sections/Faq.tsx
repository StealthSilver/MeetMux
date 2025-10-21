"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is MeetMux free to use?",
    answer:
      "Yes! MeetMux is completely free to download and use. All features are available to everyone at no cost.",
  },
  {
    question: "How does the verification system work?",
    answer:
      "Our AI-powered verification system uses selfie matching technology to ensure users are authentic. You'll take a real-time selfie that's compared to your profile photo using advanced facial recognition.",
  },
  {
    question: "Who can join MeetMux?",
    answer:
      "MeetMux is open to anyone aged 18 and above who wants to make meaningful connections through shared activities.",
  },
  {
    question: "How do I stay safe while meeting new people?",
    answer:
      "MeetMux helps you make safer, smarter connections by showing each user's Social Score and feedback, giving insight into their trustworthiness.",
  },
  {
    question: "Can I use MeetMux in my city?",
    answer:
      "MeetMux is currently available in major cities across India and expanding globally.",
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="flex flex-col justify-center items-center px-4 sm:px-6 py-14 sm:py-20 bg-[var(--color-background)] text-[var(--color-foreground)] relative overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold mb-8 sm:mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="w-full space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`backdrop-blur-xl border rounded-2xl p-5 sm:p-6 transition-all duration-300 ease-in-out mx-auto w-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] ${
                  isOpen
                    ? "bg-white/30 dark:bg-white/10 border-white/50 dark:border-white/20 shadow-lg"
                    : "bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-start text-base sm:text-lg font-secondary focus:outline-none transition-colors text-left"
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 font-secondary leading-relaxed text-left"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
