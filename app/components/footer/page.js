import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-indigo-500">Erics</h3>
            <p className="text-sm md:text-base text-gray-400">
              Pairing students for peer-to-peer learning.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-indigo-500">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-indigo-500 transition duration-300">About</Link>
              <Link href="/register" className="text-gray-300 hover:text-indigo-500 transition duration-300">Register</Link>
              <Link href="/login" className="text-gray-300 hover:text-indigo-500 transition duration-300">Login</Link>
              <Link href="/pricing" className="text-gray-300 hover:text-indigo-500 transition duration-300">Pricing</Link>
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-indigo-500">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-500 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-500 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-500 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-500 transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-indigo-500">Contact</h4>
            <p className="text-sm text-gray-400">Made with ❤️ by Erics</p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Erics. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}