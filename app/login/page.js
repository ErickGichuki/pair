'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    setError('');
    setIsLoading(true);
    console.log('Logging in:', { email, password });

    try {
      // Send a POST request to the backend API
      const response = await axios.post('https://students-pairing.onrender.com/pair/login', {
        email,
        password,
      });

      console.log('Login successful!', response.data);

      // Handle successful login
      // Example: You can save the token in localStorage or redirect to another page
      // localStorage.setItem('token', response.data.token);
      // Redirect user to dashboard or another page
      window.location.href = '/dashboard'; // Example redirection

    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left side with image */}
        <div className="flex-1 mb-8 md:mb-0 md:flex items-center justify-center">
          <img src="/login.png" alt="Login" className="rounded-lg shadow-lg w-full h-auto max-w-xs md:max-w-sm mx-auto" />
        </div>

        {/* Right side with form */}
        <div className="flex-1 px-4 md:px-8 py-6 md:py-8">
          <h2 className="text-3xl font-bold text-center mb-6">Welcome Back to Erics System</h2>
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                <div className="flex items-center space-x-2">
                  <FaUserAlt className="text-gray-400" />
                  <span>Email</span>
                </div>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-100"
                required
              />
            </div>

            <div className="mb-6 relative">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                <div className="flex items-center space-x-2">
                  <FaLock className="text-gray-400" />
                  <span>Password</span>
                </div>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-100"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className={`w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'LOGIN'}
            </button>
          </form>

          <div className="text-center mt-4">
            <Link href="/forgot-password" className="text-sm text-gray-500 hover:underline">
              Forgot Username / Password?
            </Link>
          </div>

          <div className="text-center mt-4">
            <Link href="/register" className="text-sm text-gray-500 hover:underline">
              Create your Account →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
