"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { GlowingEffect } from "@/app/components/ui/GlowingBoxes";

export default function Features() {
  const controls = useAnimation();
  const stepsRef = useRef(null);
  const isInView = useInView(stepsRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      async function runSequence() {
        await controls.start("circle1");
        await controls.start("line12");
        await controls.start("circle2");
        await controls.start("line23");
        await controls.start("circle3");
      }
      runSequence();
    }
  }, [controls, isInView]);

  return (
    <section
      id="features"
      className="min-h-screen flex flex-col justify-center items-center text-center p-4 sm:p-6 bg-[var(--color-background)] text-[var(--color-foreground)] relative overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto px-2 sm:px-4 py-6 sm:py-10 space-y-16 sm:space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-4 sm:space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-primary font-bold leading-tight mb-6 sm:mb-10">
            What is MeetMux?
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-secondary max-w-3xl text-gray-700 dark:text-gray-300 px-2">
            MeetMux is an AI-powered, activity-first social platform where users
            discover people around them based on real-time and planned
            activities like sports, movies, or travel. We bring real,
            meaningful, in-person connections back into your life.
          </p>
        </motion.div>

        <motion.div
          ref={stepsRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-6 sm:space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-primary font-bold leading-tight mb-6 sm:mb-10 mt-4 sm:mt-6">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-secondary max-w-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-10 px-2">
            Get started with MeetMux in just three simple steps and start
            building meaningful connections today.
          </p>

          <div className="relative w-full max-w-6xl">
            <div className="hidden md:block">
              <div className="grid grid-cols-3 gap-6 sm:gap-8 relative">
                <svg
                  className="absolute top-6 sm:top-8 left-0 w-full h-12 sm:h-16 z-0"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <motion.line
                    x1="20"
                    y1="5"
                    x2="50"
                    y2="5"
                    stroke="url(#gradient1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="1"
                    strokeDashoffset="1"
                    variants={{
                      initial: { strokeDashoffset: 1 },
                      line12: {
                        strokeDashoffset: 0,
                        transition: { duration: 1 },
                      },
                    }}
                    initial="initial"
                    animate={controls}
                  />
                  <motion.line
                    x1="50"
                    y1="5"
                    x2="80"
                    y2="5"
                    stroke="url(#gradient2)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="1"
                    strokeDashoffset="1"
                    variants={{
                      initial: { strokeDashoffset: 1 },
                      line23: {
                        strokeDashoffset: 0,
                        transition: { duration: 1 },
                      },
                    }}
                    initial="initial"
                    animate={controls}
                  />
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient
                      id="gradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Steps */}
                {[1, 2, 3].map((step) => {
                  const titles = [
                    "Sign Up & Complete Profile",
                    "Explore or Create Activities",
                    "Connect, Meet & Share",
                  ];
                  const texts = [
                    "Create your account, add your interests, and verify your profile with our AI-powered selfie verification system.",
                    "Browse activities happening around you or create your own events. From sports to movies, find your perfect match.",
                    "Connect with like-minded people, meet in person, and share amazing experiences together.",
                  ];
                  return (
                    <motion.div
                      key={step}
                      className="relative z-10 flex flex-col items-center"
                    >
                      <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                        <span className="text-xl sm:text-2xl font-bold text-white">
                          {step}
                        </span>
                      </div>

                      <div className="relative p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/5 dark:bg-black/10 shadow-lg hover:shadow-xl transition-all duration-300 text-left">
                        <GlowingEffect
                          glow={true}
                          disabled={false}
                          proximity={150}
                          spread={40}
                          blur={2}
                        />
                        <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                          {titles[step - 1]}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                          {texts[step - 1]}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="block md:hidden">
              <div className="flex flex-col space-y-6 sm:space-y-8 relative">
                <svg
                  className="absolute left-6 sm:left-8 top-0 w-6 sm:w-8 h-full z-0"
                  viewBox="0 0 10 100"
                  preserveAspectRatio="none"
                >
                  <motion.line
                    x1="5"
                    y1="15"
                    x2="5"
                    y2="45"
                    stroke="url(#gradientVertical1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="1"
                    strokeDashoffset="1"
                    variants={{
                      initial: { strokeDashoffset: 1 },
                      line12: {
                        strokeDashoffset: 0,
                        transition: { duration: 1 },
                      },
                    }}
                    initial="initial"
                    animate={controls}
                  />
                  <motion.line
                    x1="5"
                    y1="45"
                    x2="5"
                    y2="75"
                    stroke="url(#gradientVertical2)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="1"
                    strokeDashoffset="1"
                    variants={{
                      initial: { strokeDashoffset: 1 },
                      line23: {
                        strokeDashoffset: 0,
                        transition: { duration: 1 },
                      },
                    }}
                    initial="initial"
                    animate={controls}
                  />
                  <defs>
                    <linearGradient
                      id="gradientVertical1"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient
                      id="gradientVertical2"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                  </defs>
                </svg>

                {[1, 2, 3].map((step) => {
                  const titles = [
                    "Sign Up & Complete Profile",
                    "Explore or Create Activities",
                    "Connect, Meet & Share",
                  ];
                  const texts = [
                    "Create your account, add your interests, and verify your profile with our AI-powered selfie verification system.",
                    "Browse activities happening around you or create your own events. From sports to movies, find your perfect match.",
                    "Connect with like-minded people, meet in person, and share amazing experiences together.",
                  ];
                  return (
                    <motion.div
                      key={step}
                      className="relative z-10 flex items-center space-x-4 sm:space-x-6"
                    >
                      <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg flex-shrink-0">
                        <span className="text-xl sm:text-2xl font-bold text-white">
                          {step}
                        </span>
                      </div>

                      <div className="relative flex-1 p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/5 dark:bg-black/10 shadow-lg">
                        <GlowingEffect
                          glow={true}
                          disabled={false}
                          proximity={150}
                          spread={40}
                          blur={2}
                        />
                        <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                          {titles[step - 1]}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                          {texts[step - 1]}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center text-center space-y-8 sm:space-y-10 mt-16 sm:mt-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-primary font-bold leading-tight">
            See MeetMux in Action
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-secondary max-w-3xl text-gray-700 dark:text-gray-300 px-2">
            Explore our beautiful, intuitive interface designed to make
            connecting with others effortless.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full mt-8 sm:mt-10">
            {[
              {
                name: "first",
                title: "Home Feed",
                description: "Stay updated with your personalized feed",
              },
              {
                name: "second",
                title: "Explore Map",
                description: "Discover people and events around you",
              },
              {
                name: "third",
                title: "Profile",
                description: "Connect and communicate instantly",
              },
              {
                name: "fourth",
                title: "Suggested Profiles",
                description:
                  "Get personalized suggestions for profiles to connect with",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center text-center space-y-2 sm:space-y-4"
              >
                <div className="relative rounded-2xl overflow-hidden dark:border-gray-700 bg-white/5 dark:bg-black/10 shadow-xl group w-[85%] sm:w-auto mx-auto">
                  <GlowingEffect glow={true} disabled={false} />
                  <div className="relative">
                    <Image
                      src={`/${item.name}.png`}
                      alt={item.name}
                      width={350}
                      height={220}
                      className="rounded-2xl object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2 mt-2 sm:mt-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
