'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isClient, setIsClient] = useState(false); // To check if the component is running on the client side
  const router = useRouter();

  // Set client-side flag after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[a-zA-Z0-9]/, 'Password must be alphanumeric (letters and numbers only)')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: async (values) => {
      const { username, email, password } = values;

      try {
        // Make a POST request to the relative backend registration endpoint
        const response = await axios.post('https://students-pairing.onrender.com/pair/register/', {
          username,
          email,
          password,
        });

        if (response.status === 201) {
          // On successful registration, navigate to login
          router.push('/login');
        }
      } catch (err) {
        console.error('Registration error:', err);
        setError('There was an error with the registration. Please try again.');
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const togglePasswordVisibilityConfirm = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  // Handle Google and Twitter sign-up (integration with OAuth providers)
  const handleGoogleSignUp = () => {
    console.log('Sign up with Google');
  };

  const handleTwitterSignUp = () => {
    console.log('Sign up with Twitter');
  };

  if (!isClient) {
    return null; // Prevent rendering of the component on the server
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-7xl p-8 flex space-x-8 bg--300 shadow-lg rounded-lg">
        
        {/* Left Side: Image */}
        <div className="w-1/2 hidden md:block">
          <img src="/signup.png" alt="signup image" className="w-full h-auto rounded-lg shadow-lg"/>
        </div>

        {/* Right Side: Form */}
        <div className="w-full max-w-md p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>

          <div className="space-y-4">
            {/* Google Sign Up Button */}
            <button
              onClick={handleGoogleSignUp}
              className="w-full flex items-center justify-center py-2 px-4 bg-red-600 text-white rounded-lg shadow-sm hover:bg-red-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M23.49 12.27c-.45-.13-.93-.2-1.42-.2-2.43 0-4.45 2.02-4.45 4.5s2.02 4.5 4.45 4.5c.49 0 .97-.07 1.42-.2.29-.09.58-.19.86-.31l3.43 3.43c-.66.66-1.47 1.25-2.35 1.75-1.47 1-3.27 1.56-5.28 1.56-4.5 0-8.11-3.61-8.11-8.01 0-4.48 3.61-8.09 8.11-8.09 1.49 0 2.91.44 4.1 1.19l-3.43 3.43c-.68-.39-1.45-.63-2.28-.63z"
                />
              </svg>
              Sign Up with Google
            </button>

            {/* Twitter Sign Up Button */}
            <button
              onClick={handleTwitterSignUp}
              className="w-full flex items-center justify-center py-2 px-4 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M23.644 4.837c-.875.39-1.81.653-2.798.772 1.007-.602 1.786-1.554 2.149-2.694-.943.556-1.98.97-3.094 1.197-.89-.949-2.16-1.537-3.566-1.537-2.708 0-4.911 2.268-4.911 5.057 0 .396.045.783.131 1.152-4.084-.205-7.683-2.157-10.09-5.104-.428.738-.673 1.591-.673 2.499 0 1.73.915 3.25 2.324 4.141-.857-.026-1.67-.265-2.375-.662v.067c0 2.441 1.728 4.528 4.02 5.005-.42.113-.86.177-1.306.177-.32 0-.635-.031-.943-.089.636 1.983 2.436 3.418 4.576 3.456-1.675 1.31-3.791 2.084-6.034 2.084-.39 0-.78-.023-1.163-.068 2.173 1.389 4.757 2.216 7.452 2.216 8.946 0 13.84-7.392 13.84-13.793 0-.209-.006-.419-.017-.627.948-.68 1.783-1.527 2.416-2.492z"
                />
              </svg>
              Sign Up with Twitter
            </button>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="text-gray-600 mx-2">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Email and Password Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm">{formik.errors.username}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibilityConfirm}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
            >
              → Register
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
