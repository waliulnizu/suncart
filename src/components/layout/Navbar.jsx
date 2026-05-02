"use client";

import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session, isPending } = useSession();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110">
            <span className="text-white text-xl font-bold">☀️</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-orange-600">SunCart</h1>
            <p className="text-xs text-gray-500">Solar Solutions</p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">Products</NavLink>
          {session && <NavLink href="/profile">My Profile</NavLink>}
        </div>

        {/* Auth Section */}
        <div className="flex gap-3 items-center">
          {isPending && (
            <span className="text-gray-500 text-sm">Loading...</span>
          )}

          {!session && !isPending && (
            <>
              <Link 
                href="/login"
                className="px-6 py-2.5 text-orange-600 font-semibold rounded-lg border-2 border-orange-300 hover:bg-orange-50 active:scale-95"
              >
                Login
              </Link>
              <Link 
                href="/register"
                className="px-6 py-2.5 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 hover:shadow-xl active:scale-95"
              >
                Register
              </Link>
            </>
          )}

          {session && !isPending && (
            <div className="flex items-center gap-4">
              <img
                src={session.user.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                className="w-10 h-10 rounded-full border-2 border-orange-400"
                alt="user"
              />
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 active:scale-95"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link 
      href={href}
      className="relative font-medium text-gray-700 group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 group-hover:w-full"></span>
    </Link>
  );
}