'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false); // Close menu when a link is clicked

  return (
    <nav className="bg-green-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-24">
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
          <div className="flex-1 flex items-center justify-between sm:items-center sm:justify-between">
            <div className="flex-shrink-0">
              <Link href='/' className="text-2xl font-bold">Erics Pairing System</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:ml-6 sm:items-center sm:space-x-8">
              {/* Home link and Search box */}
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium">Home</Link>
                {/* <input
                  placeholder="Search"
                  className="w-72 rounded-xl p-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                /> */}
                <Link href="/about" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium">About</Link>
              </div>

              {/* Other Menu Items */}
              <div className="flex items-center space-x-8">
                <Link href="/login" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link href="/register" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium">Register</Link>
                <Link href="/analytics" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium">Pairing Analytics</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="flex flex-col px-4 pt-4 pb-6 space-y-4">
          <Link href="/" onClick={closeMenu} className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link href="/about" onClick={closeMenu} className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium">About</Link>
          <Link href="/login" onClick={closeMenu} className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium">Login</Link>
          <Link href="/register" onClick={closeMenu} className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium">Register</Link>
          <Link href="/analytics" onClick={closeMenu} className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium">Pairing Analytics</Link>
          {/* <input
            placeholder="Search"
            className="w-full mt-4 rounded-xl p-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          /> */}
        </div>
      </div>
    </nav>
  );
}
