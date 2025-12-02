"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Quote, Star, TrendingUp, Users, Award, Zap } from "lucide-react"

// Types
interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

interface Stat {
  icon: React.ElementType
  value: string
  label: string
}

// Testimonials Data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Personal Trainer",
    content:
      "GymPro has completely transformed how I train my clients. The equipment is top-notch and the community is incredibly supportive. I've seen amazing results in just 3 months!",
    avatar: "",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Fitness Enthusiast",
    content:
      "Best gym I've ever joined! The staff is knowledgeable, the facilities are always clean, and the variety of classes keeps my workouts exciting. Highly recommend to anyone serious about fitness.",
    avatar: "",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Weight Loss Journey",
    content:
      "I've lost 40 pounds since joining GymPro! The trainers created a personalized plan that actually works. The supportive environment made all the difference in my transformation.",
    avatar: "",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Marathon Runner",
    content:
      "As a competitive runner, I need quality training facilities. GymPro delivers on every level - from cardio equipment to recovery zones. It's become an essential part of my training routine.",
    avatar: "",
    rating: 5,
  },
]

// Stats Data
const stats: Stat[] = [
  { icon: Users, value: "10,000+", label: "Active Members" },
  { icon: Award, value: "500+", label: "Success Stories" },
  { icon: TrendingUp, value: "95%", label: "Goal Achievement" },
  { icon: Zap, value: "24/7", label: "Access Available" },
]

export default function TestimonialSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-600 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-blue-600 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex">
            <div className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 backdrop-blur-sm">
              <Quote className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Testimonials</span>
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-4 text-balance text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            What Our Members Say
          </motion.h2>

          <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-pretty text-lg text-gray-400 sm:text-xl">
            Join thousands of satisfied members who have transformed their lives with GymPro
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-blue-600/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

              <div className="relative z-10">
                {/* Avatar */}
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-purple-500/30 bg-gradient-to-br from-purple-600/20 to-blue-600/20 text-lg font-bold text-purple-300 ring-2 ring-purple-500/20">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="mb-3 h-8 w-8 text-purple-500/30" />

                {/* Content */}
                <p className="text-pretty text-sm leading-relaxed text-gray-300">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 text-center backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

                <div className="relative z-10">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/10 ring-2 ring-purple-500/20 transition-all group-hover:bg-purple-500/20 group-hover:ring-purple-500/40">
                    <Icon className="h-7 w-7 text-purple-400 transition-transform group-hover:scale-110" />
                  </div>
                  <div className="mb-2 text-3xl font-bold text-white lg:text-4xl">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
