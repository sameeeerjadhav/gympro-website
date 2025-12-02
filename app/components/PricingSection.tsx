'use client';

import { useState, useEffect } from 'react';
import { Check, Sparkles, Shield, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const plans = {
    basic: {
      monthly: '₹999',
      annually: '₹9,990',
    },
    pro: {
      monthly: '₹2,499',
      annually: '₹24,990',
    },
    elite: {
      monthly: '₹4,999',
      annually: '₹49,990',
    },
  };

  if (!mounted) return null;

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 xs:px-6 sm:px-8 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-2"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
              Affordable Plans
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
          >
            Choose Your Fitness Journey
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8"
          >
            Start with a 14-day free trial. No credit card required.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-gray-800/50 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300"
          >
            <span className={`font-medium transition-colors text-sm sm:text-base ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-5 w-9 sm:h-6 sm:w-11 items-center rounded-full bg-gray-700 border border-gray-600 hover:border-blue-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className={`inline-block h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-white ${
                  isAnnual ? 'translate-x-4 sm:translate-x-6' : 'translate-x-0.5 sm:translate-x-1'
                }`}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.button>
            
            <span className={`font-medium transition-colors text-sm sm:text-base ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            <motion.span 
              className="text-blue-400 text-xs sm:text-sm font-semibold bg-blue-400/10 px-2 py-1 rounded hover:bg-blue-400/20 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Save 16%
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
          {/* Basic Plan */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative bg-gray-900/70 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800 p-4 sm:p-6 lg:p-8 flex flex-col hover:border-blue-500/50 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group order-1"
          >
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-100 transition-colors">Basic</h3>
              <div className="flex items-baseline gap-1 mb-1 sm:mb-2">
                <span className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white group-hover:scale-105 transition-transform inline-block">
                  {isAnnual ? plans.basic.annually : plans.basic.monthly}
                </span>
                <span className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors">
                  {isAnnual ? '/year' : '/month'}
                </span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm group-hover:text-gray-200 transition-colors">Perfect for fitness beginners</p>
            </div>

            <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6 lg:mb-8 flex-grow">
              {[
                "AI Workout Plans",
                "Basic Progress Tracking", 
                "Mobile App Access",
                "Email Support",
                "3 Workouts/Week"
              ].map((feature, index) => (
                <motion.li 
                  key={feature}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 sm:gap-3 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 text-xs sm:text-sm lg:text-base group-hover:text-gray-200 transition-colors">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 group-hover:bg-gray-700 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center gap-1 sm:gap-2">
                Buy Now
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* Pro Plan (Most Popular) */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative bg-gray-900/70 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-blue-500 p-4 sm:p-6 lg:p-8 flex flex-col shadow-xl sm:shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 lg:scale-105 z-10 order-3 lg:order-2"
          >
            {/* Most Popular Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
              className="absolute -top-2 sm:-top-3 lg:-top-4 left-1/2 transform -translate-x-1/2"
            >
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1 sm:gap-2">
                <Crown className="w-2 h-2 sm:w-3 sm:h-3" />
                Most Popular
              </span>
            </motion.div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-cyan-100 transition-colors">Pro</h3>
              <div className="flex items-baseline gap-1 mb-1 sm:mb-2">
                <span className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white group-hover:scale-105 transition-transform inline-block">
                  {isAnnual ? plans.pro.annually : plans.pro.monthly}
                </span>
                <span className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors">
                  {isAnnual ? '/year' : '/month'}
                </span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm group-hover:text-gray-200 transition-colors">For serious fitness enthusiasts</p>
            </div>

            <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6 lg:mb-8 flex-grow">
              {[
                "Everything in Basic",
                "Advanced Analytics",
                "Form Correction AI",
                "Priority Support", 
                "Nutrition Planning"
              ].map((feature, index) => (
                <motion.li 
                  key={feature}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 sm:gap-3 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 text-xs sm:text-sm lg:text-base group-hover:text-gray-200 transition-colors">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center gap-1 sm:gap-2">
                Buy Now
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
              </span>
            </motion.button>
          </motion.div>

          {/* Elite Plan */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative bg-gray-900/70 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800 p-4 sm:p-6 lg:p-8 flex flex-col hover:border-purple-500/50 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group order-2 lg:order-3"
          >
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-purple-100 transition-colors">Elite</h3>
              <div className="flex items-baseline gap-1 mb-1 sm:mb-2">
                <span className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white group-hover:scale-105 transition-transform inline-block">
                  {isAnnual ? plans.elite.annually : plans.elite.monthly}
                </span>
                <span className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors">
                  {isAnnual ? '/year' : '/month'}
                </span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm group-hover:text-gray-200 transition-colors">Ultimate personalized experience</p>
            </div>

            <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6 lg:mb-8 flex-grow">
              {[
                "Everything in Pro",
                "1-on-1 Coach Sessions",
                "Custom Program Design", 
                "24/7 Premium Support"
              ].map((feature, index) => (
                <motion.li 
                  key={feature}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.1 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 sm:gap-3 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 text-xs sm:text-sm lg:text-base group-hover:text-gray-200 transition-colors">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center gap-1 sm:gap-2">
                Buy Now
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 lg:mt-12 text-center px-2"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 w-full max-w-2xl mx-auto">
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-sm sm:text-base mb-1">🇮🇳 Made for Indian Users</p>
              <p className="text-gray-400 text-xs sm:text-sm">
                All plans include 14-day free trial. Cancel anytime. UPI & Net Banking accepted.
              </p>
            </div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}