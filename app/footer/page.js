import Link from "next/link";
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto text-center px-4">
          <p className="text-sm mb-2">© {new Date().getFullYear()} Erics. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="/" className="text-gray-300 hover:text-white text-sm">About</Link>
            <Link href="/blog" className="text-gray-300 hover:text-white text-sm">Blog</Link>
            <Link href="/locations" className="text-gray-300 hover:text-white text-sm">Locations</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white text-sm">Pricing</Link>
            <Link href="/hire-us" className="text-gray-300 hover:text-white text-sm">Hire Us</Link>
          </div>
          <p className="text-xs text-gray-400">Made with ❤️ by Erics</p>
        </div>
      </footer>
    );
  }
  