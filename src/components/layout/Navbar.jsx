"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">SunCart</Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/profile">My Profile</Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-1 border rounded">Login</button>
          <button className="px-4 py-1 bg-black text-white rounded">
            Register
          </button>
        </div>

      </div>
    </nav>
  );
}