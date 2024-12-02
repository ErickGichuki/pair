import React from 'react'
import { FaCheck } from 'react-icons/fa'

function Hero() {
  return (
    <div className="relative bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Content */}
        <div className="text-left w-full md:w-3/4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-blue-600">
            Efficient and Faster Pairing.
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Pairing students manually is time-consuming and prone to duplication. Our system automates the pairing process, ensuring students are paired weekly based on their performance, strengths, and weaknesses.
          </p>
          <a
            href="https://students-pairing.onrender.com/pair/register/"
            className="bg-blue-800 hover:bg-blue-700 font-semibold py-3 px-6 sm:py-4 sm:px-9 text-white rounded-full text-lg"
          >
            Get Started
          </a>
          <div className="mt-12 space-y-4 text-sm">
            <div className="flex items-center space-x-2">
              <FaCheck className="border border-indigo-600 rounded-full text-2xl p-2" />
              <h2 className="font-medium">Weekly Student Pairing</h2>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheck className="border border-indigo-600 rounded-full text-2xl p-2" />
              <h2 className="font-medium">Avoid Duplication and Confusion</h2>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheck className="border border-indigo-600 rounded-full text-2xl p-2" />
              <h2 className="font-medium">Performance-based Pairing</h2>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src="/pairing.png"
            alt="Student Pairing"
            className="w-full h-auto object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
