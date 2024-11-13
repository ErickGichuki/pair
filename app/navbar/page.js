'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo and Desktop Menu */}
          <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">Erics Pairing System</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link href="/register" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</Link>
                <Link href="/pair-students" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pair Students</Link>
                <Link href="/history" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">History of Pairings</Link>
                <Link href="/analytics" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pairing Analytics</Link>
                <Link href="/profile" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link href="/login" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</Link>
          <Link href="/create-account" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Create Account</Link>
          <Link href="/pair-students" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pair Students</Link>
          <Link href="/history" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">History of Pairings</Link>
          <Link href="/analytics" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pairing Analytics</Link>
          <Link href="/profile" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Profile</Link>
        </div>
      </div>
    </nav>
  );
}
