"use client"

import { useState } from "react"
import { Dumbbell, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Features', id: 'features' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'About', id: 'about' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              <Dumbbell className="w-8 h-8 text-blue-500 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
              GymPro
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative flex items-center gap-2">
                <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
                <span>Get Started</span>
                <svg 
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-0 group-hover:translate-x-1"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6 transform rotate-90 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-300 font-medium group"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                <span>{item.name}</span>
                <svg 
                  className="w-4 h-4 ml-auto text-gray-500 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
          <div className="pt-2">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 group flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
              <span>Get Started</span>
              <svg 
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-0 group-hover:translate-x-1"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}