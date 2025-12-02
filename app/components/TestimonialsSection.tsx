"use client";

import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Raj Sharma',
    role: 'Yoga Instructor',
    content: "GymPro's AI form correction helped me identify posture issues I've had for years. My clients are seeing better results with fewer injuries.",
    avatar: 'RS',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Marathon Runner',
    content: 'The personalized training plans adapted to my recovery needs perfectly. Shaved 15 minutes off my marathon PB!',
    avatar: 'PP',
    rating: 4,
  },
  {
    name: 'Arun Kumar',
    role: 'IT Professional',
    content: 'As someone with a busy schedule, the 24/7 AI coach keeps me accountable. The progress tracking is incredibly motivating.',
    avatar: 'AK',
    rating: 5,
  },
  {
    name: 'Anjali Singh',
    role: 'Fitness Trainer',
    content: 'Most comprehensive fitness app I have ever used. The biomechanics analysis took my training to the next level.',
    avatar: 'AS',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer"
          >
            <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
              Testimonials
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
          >
            Loved by Fitness Enthusiasts
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-2"
          >
            Join thousands of satisfied members who transformed their fitness journey with GymPro
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
          {testimonials.map((testimonial, index) => {
            const isHovered = hoveredCard === index;
            
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut",
                  delay: 0.3 + (index * 0.15)
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-gray-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group flex flex-col"
              >
                {/* Quote Icon */}
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <Quote className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400/30 transition-all duration-300 ${
                    isHovered ? 'text-blue-400/70 scale-110' : ''
                  }`} />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4 lg:mb-6 items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) + (i * 0.1) }}
                      viewport={{ once: true }}
                      className="flex-shrink-0"
                    >
                      <Star
                        className={`w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 transition-transform ${
                          isHovered ? 'scale-110' : ''
                        }`}
                      />
                    </motion.div>
                  ))}
                  <span className="text-gray-500 text-xs sm:text-sm ml-1 sm:ml-2">★ {testimonial.rating}.0</span>
                </div>

                {/* Testimonial Text */}
                <p className={`text-gray-300 italic text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6 lg:mb-8 transition-colors flex-grow ${
                  isHovered ? 'text-gray-200' : ''
                }`}>
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className={`flex items-center gap-3 pt-4 sm:pt-5 lg:pt-6 border-t transition-colors ${
                  isHovered ? 'border-gray-700' : 'border-gray-800'
                }`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className={`relative flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 flex-shrink-0 ${
                      isHovered ? 'scale-110 shadow-md shadow-blue-500/30' : ''
                    }`}
                  >
                    {testimonial.avatar}
                    {/* Verified Badge */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-blue-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full" />
                    </div>
                  </motion.div>
                  <div className="min-w-0">
                    <p className={`font-semibold text-sm sm:text-base transition-colors truncate ${
                      isHovered ? 'text-blue-100' : 'text-white'
                    }`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-xs sm:text-sm transition-colors truncate ${
                      isHovered ? 'text-gray-300' : 'text-gray-400'
                    }`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 lg:mt-16 pt-8 sm:pt-10 lg:pt-12 border-t border-gray-800 px-2 sm:px-0"
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
            {[
              { value: '50,000+', label: 'Active Members' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '100+', label: 'Cities in India' },
              { value: '4.8/5', label: 'Play Store Rating' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut",
                  delay: 1.2 + (index * 0.1)
                }}
                viewport={{ once: true }}
                className="text-center p-3 sm:p-4 rounded-lg hover:bg-gray-800/30 hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-100 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm lg:text-base group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}