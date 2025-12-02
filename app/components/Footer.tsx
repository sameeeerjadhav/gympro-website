"use client";

import { useState, useEffect } from 'react';
import { Dumbbell, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Sparkles, Send, ArrowUp, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Dumbbell className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-500" />
              </motion.div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                GymPro
              </span>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer"
            >
              <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-400 group-hover:animate-pulse" />
              <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                AI-Powered Fitness
              </span>
            </motion.div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              Transform your fitness journey with AI-powered personalized workouts, 
              nutrition guidance, and expert coaching. Made in India 🇮🇳 for the world.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              {[
                { icon: Facebook, color: 'hover:text-blue-500 hover:bg-blue-500/10' },
                { icon: Twitter, color: 'hover:text-cyan-500 hover:bg-cyan-500/10' },
                { icon: Instagram, color: 'hover:text-pink-500 hover:bg-pink-500/10' },
                { icon: Youtube, color: 'hover:text-red-500 hover:bg-red-500/10' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 p-1.5 sm:p-2 rounded-lg transition-all duration-300 ${social.color} bg-gray-800/50 border border-gray-700`}
                >
                  <social.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white group">
              Quick Links
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 mt-1" />
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'Features', 'Pricing', 'Testimonials', 'About Us'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 group">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 flex-shrink-0"
                    />
                    <span className="truncate">{item}</span>
                    <motion.svg
                      initial={{ opacity: 0, x: -5 }}
                      className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white group">
              Resources
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-300 mt-1" />
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Blog', 'Documentation', 'Help Center', 'Community', 'Partnerships'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 group">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 flex-shrink-0"
                    />
                    <span className="truncate">{item}</span>
                    <motion.svg
                      initial={{ opacity: 0, x: -5 }}
                      className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white group">
              Contact Us
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 mt-1" />
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <motion.li 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-2 sm:gap-3 group hover:translate-x-1 transition-transform duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-500/10 p-1.5 sm:p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors flex-shrink-0"
                >
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                </motion.div>
                <div className="min-w-0">
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">Email</p>
                  <p className="text-gray-400 text-xs sm:text-sm group-hover:text-blue-300 transition-colors truncate">
                    sameerjadhav@gympro.com
                  </p>
                </div>
              </motion.li>
              <motion.li 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-2 sm:gap-3 group hover:translate-x-1 transition-transform duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-emerald-500/10 p-1.5 sm:p-2 rounded-lg group-hover:bg-emerald-500/20 transition-colors flex-shrink-0"
                >
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                </motion.div>
                <div className="min-w-0">
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">Phone</p>
                  <p className="text-gray-400 text-xs sm:text-sm group-hover:text-emerald-300 transition-colors">
                    +91 87887 43507
                  </p>
                </div>
              </motion.li>
              <motion.li 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-start gap-2 sm:gap-3 group hover:translate-x-1 transition-transform duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-amber-500/10 p-1.5 sm:p-2 rounded-lg group-hover:bg-amber-500/20 transition-colors flex-shrink-0"
                >
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />
                </motion.div>
                <div className="min-w-0">
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">Office</p>
                  <p className="text-gray-400 text-xs sm:text-sm group-hover:text-amber-300 transition-colors">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section for Mobile/Tablet */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 lg:p-6 mb-6 sm:mb-8 border border-gray-800/50 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group lg:hidden"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <Send className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 group-hover:animate-bounce flex-shrink-0" />
            <div className="text-center sm:text-left flex-1">
              <h4 className="text-sm sm:text-base font-semibold text-white mb-1">Stay Updated</h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Subscribe for fitness tips & exclusive offers
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="w-full sm:w-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className={`font-semibold px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap shadow-lg text-xs sm:text-sm ${
                    subscribed 
                      ? 'bg-green-600 hover:bg-green-700 shadow-green-500/20' 
                      : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/20'
                  }`}
                >
                  {subscribed ? '✓' : 'Join'}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="pt-6 sm:pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-gray-400 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 hover:text-gray-300 transition-colors text-center sm:text-left">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 animate-pulse flex-shrink-0" />
              <span>©{currentYear} GymPro. All rights reserved. Made with ❤️ by Sameer Jadhav</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -1 }}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 relative group whitespace-nowrap"
                >
                  {item}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 text-center"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-white transition-all duration-300 text-xs sm:text-sm group"
          >
            <span>Back to top</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="p-0.5 sm:p-1 bg-gray-800/50 rounded-lg border border-gray-700 group-hover:border-blue-500/50"
            >
              <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-blue-400" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}