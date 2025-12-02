"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Eye, 
  BarChart3, 
  Apple, 
  Users, 
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FeaturesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1); // Default to 1 for SSR

  // Check if mobile for carousel behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      
      // Calculate visible count based on window width
      let count = 1;
      if (window.innerWidth < 768) {
        count = 1;
      } else if (window.innerWidth < 1024) {
        count = 2;
      } else {
        count = 3;
      }
      setVisibleCount(count);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      id: 1,
      title: "AI Workout Planner",
      description: "Personalized workout plans that adapt to your progress and continuously optimize for maximum results.",
      icon: Brain,
      color: "blue",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      stats: "95% accuracy"
    },
    {
      id: 2,
      title: "Form Correction AI",
      description: "Real-time feedback on exercise form using computer vision to prevent injuries and maximize results.",
      icon: Eye,
      color: "emerald",
      gradient: "from-emerald-500 via-green-500 to-emerald-600",
      stats: "Real-time analysis"
    },
    {
      id: 3,
      title: "Progress Analytics",
      description: "Comprehensive analytics tracking strength gains, body composition, and workout consistency.",
      icon: BarChart3,
      color: "purple",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      stats: "50+ metrics"
    },
    {
      id: 4,
      title: "Smart Nutrition Guide",
      description: "AI-generated meal plans based on dietary preferences, goals, and macronutrient requirements.",
      icon: Apple,
      color: "orange",
      gradient: "from-orange-500 via-amber-500 to-orange-600",
      stats: "1,000+ recipes"
    },
    {
      id: 5,
      title: "Community Challenges",
      description: "Compete in global fitness challenges and stay motivated with a supportive community.",
      icon: Users,
      color: "pink",
      gradient: "from-pink-500 via-rose-500 to-pink-600",
      stats: "10k+ users"
    },
    {
      id: 6,
      title: "Expert Coaching",
      description: "Access certified trainers for personalized guidance, form checks, and motivation.",
      icon: GraduationCap,
      color: "cyan",
      gradient: "from-cyan-500 via-blue-500 to-cyan-600",
      stats: "24/7 support"
    }
  ];

  const slides = Math.ceil(features.length / visibleCount);
  const visibleFeatures = features.slice(currentSlide * visibleCount, currentSlide * visibleCount + visibleCount);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides) % slides);
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-950 to-black py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient - Responsive sizing */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/4 sm:w-1/3 sm:h-1/3 bg-blue-500/5 blur-xl sm:blur-2xl lg:blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/4 sm:w-1/3 sm:h-1/3 bg-purple-500/5 blur-xl sm:blur-2xl lg:blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 hover:border-blue-500/50 hover:bg-gray-900/70 transition-all duration-300"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-gray-300">Advanced Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
          >
            <span className="block">Cutting-Edge</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Fitness Platform
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-400 max-w-2xl mx-auto px-2"
          >
            Experience the future of fitness with our intelligent platform
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-4 sm:px-8 lg:px-12">
          {/* Navigation Arrows - Responsive positioning */}
          <div className="absolute -left-2 -right-2 sm:-left-4 sm:-right-4 lg:-left-6 lg:-right-6 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none z-10">
            <button
              onClick={prevSlide}
              className="pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-full flex items-center justify-center hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 group shadow-lg sm:shadow-xl lg:shadow-2xl"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
            </button>
            
            <button
              onClick={nextSlide}
              className="pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-full flex items-center justify-center hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 group shadow-lg sm:shadow-xl lg:shadow-2xl"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
            </button>
          </div>

          {/* Features Carousel */}
          <div className="relative overflow-hidden px-2 sm:px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`grid grid-cols-1 ${visibleCount >= 2 ? 'md:grid-cols-2' : ''} ${visibleCount >= 3 ? 'lg:grid-cols-3' : ''} gap-4 sm:gap-6 lg:gap-8`}
              >
                {visibleFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  const delay = index * 0.1;

                  return (
                    <motion.div
                      key={feature.id}
                      variants={cardVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.5, delay }}
                      className="group relative"
                    >
                      {/* Card Container */}
                      <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-sm border border-gray-800/50 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden hover:border-gray-700/50 transition-all duration-500">
                        
                        {/* Floating Icon */}
                        <div className="relative mb-4 sm:mb-6 lg:mb-8">
                          <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-800 flex items-center justify-center shadow-lg sm:shadow-xl lg:shadow-2xl">
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 rounded-lg sm:rounded-xl lg:rounded-2xl`} />
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white relative z-10" />
                          </div>
                        </div>

                        {/* Feature Number */}
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6">
                          <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">{feature.id}</span>
                        </div>

                        {/* Content */}
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4 lg:mb-6">
                          {feature.description}
                        </p>

                        {/* Stats Badge */}
                        <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${feature.gradient} rounded-full animate-pulse`} />
                          <span className="text-xs sm:text-sm font-semibold text-gray-300">
                            {feature.stats}
                          </span>
                        </div>

                        {/* Hover Effect Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full w-0 group-hover:w-full transition-all duration-1000`} />
                        </div>

                        {/* Corner Accents - Hide on mobile */}
                        <div className="hidden sm:block absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4 w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-gradient-to-r from-gray-700 to-transparent rounded-full" />
                        <div className="hidden sm:block absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-gradient-to-r from-transparent to-gray-700 rounded-full" />
                        <div className="hidden sm:block absolute bottom-2 left-2 sm:bottom-3 sm:left-3 lg:bottom-4 lg:left-4 w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-gradient-to-r from-gray-700 to-transparent rounded-full" />
                        <div className="hidden sm:block absolute bottom-2 right-2 sm:bottom-3 sm:right-3 lg:bottom-4 lg:right-4 w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-gradient-to-r from-transparent to-gray-700 rounded-full" />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8 lg:mt-10 xl:mt-12">
            {Array.from({ length: slides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 w-4 sm:w-6 lg:w-8' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements - Responsive positioning */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 border border-blue-500/30 rounded-full animate-ping" />
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 border border-cyan-500/30 rounded-full animate-ping delay-1000" />
    </section>
  );
}