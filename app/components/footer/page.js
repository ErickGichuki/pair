import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Erics Pairing System</h3>
            <p className="text-md md:text-base">
              Pairing students for peer-to-peer learning. We focus on skill matching, mentorship and team projects.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className=" hover:text-blue-500 transition duration-300">About</Link>
              <Link href="/register" className="hover:text-blue-500 transition duration-300">Register</Link>
              <Link href="/login" className="hover:text-blue-500 transition duration-300">Login</Link>
              <Link href="/analytics" className="hover:text-blue-500 transition duration-300">Analytics</Link>
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
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
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm ">Made with ❤️ by Erics</p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 text-center">
          <p className="text-sm ">
          &copy; {new Date().getFullYear()} Erics. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
