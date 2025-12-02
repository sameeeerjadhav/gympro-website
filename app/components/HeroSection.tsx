"use client";

import { Sparkles, Activity, Brain, Zap, Cpu, LineChart, Target, Shield } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [animatedValue, setAnimatedValue] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen flex items-center"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 30h60M30 0v60' stroke='%2360a5fa' stroke-width='0.5'/%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Animated gradient orbs - Responsive positioning and sizing */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-10 right-10 w-40 h-40 sm:top-16 sm:right-16 sm:w-48 sm:h-48 md:top-20 md:right-20 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-blue-500 rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-10 left-10 w-40 h-40 sm:bottom-16 sm:left-16 sm:w-48 sm:h-48 md:bottom-20 md:left-20 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-cyan-500 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className="text-center">
          {/* Clean Badge */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 mb-8 sm:mb-10 lg:mb-12 hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-300 group cursor-pointer"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            </motion.div>
            <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
              AI-Powered Fitness Revolution
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="mb-6 sm:mb-8">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4"
            >
              <span className="block">Transform Your Body</span>
              <span className="block mt-2 sm:mt-3 lg:mt-4">
                with{' '}
                <span className="relative inline-block">
                  <span className="text-blue-400 relative group cursor-pointer">
                    AI-Personalized
                    <div className="absolute -bottom-1 sm:-bottom-1.5 lg:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-blue-500/30 rounded-full group-hover:w-full group-hover:h-[2px] group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300" />
                  </span>
                </span>
              </span>
            </motion.h1>
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-1 sm:mt-2"
            >
              Fitness Programs
            </motion.h2>
          </div>

          {/* Animated word cycling */}
          <div className="h-16 sm:h-18 lg:h-20 mb-6 sm:mb-8 lg:mb-10 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold">
                <div className="relative h-10 sm:h-12 overflow-hidden">
                  {['Workouts', 'Nutrition', 'Coaching', 'Progress'].map((word, index) => (
                    <motion.div
                      key={word}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        delay: index * 0.3, 
                        duration: 0.6, 
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 1.5
                      }}
                      style={{
                        transform: `translateY(${((index - animatedValue / 25) % 4) * 100}%)`,
                      }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform duration-300">
                        <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-blue-300 group-hover:text-white transition-colors">{word}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-2"
          >
            <div className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed sm:leading-relaxed group hover:scale-[1.02] transition-transform duration-300 inline-block">
              {/* Wrap the animated icon in a span (inline element) */}
              <span className="inline-flex items-center align-middle mr-2 sm:mr-3 mb-1">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="inline-block"
                >
                  <Brain className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                </motion.span>
              </span>
              <span className="font-semibold text-white group-hover:text-blue-300 transition-colors">GymPro AI</span> delivers 
              <span className="text-blue-300 font-semibold mx-1 sm:mx-2 group-hover:text-white transition-colors">personalized workout plans</span>
              that adapt to your progress, with real-time form analysis and intelligent 
              nutrition guidance powered by advanced machine learning.
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20 px-4"
          >
            <button className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-3.5 lg:px-10 lg:py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
              Start Free Trial
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full opacity-100 flex-shrink-0"
              />
            </button>

            <button className="group w-full sm:w-auto bg-transparent hover:bg-gray-800/50 text-white font-semibold px-6 py-3 sm:px-8 sm:py-3.5 lg:px-10 lg:py-4 rounded-lg border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base">
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-yellow-400 transition-colors" />
              </motion.div>
              Book Demo
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 sm:mt-12 lg:mt-16 flex flex-col items-center justify-center gap-2"
          >
            <span className="text-gray-500 text-xs sm:text-sm">Explore More</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-700 rounded-full flex justify-center"
            >
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 sm:h-3 bg-gray-500 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}