"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/authStore";

const Navbar = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          BlogApp
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/" className="hover:text-gray-500 transition">
            Home
          </Link>

          <Link href="/blogs" className="hover:text-gray-500 transition">
            Blogs
          </Link>

          {isAuthenticated ? (
            <Link
              href="/dashboard"
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/login"
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Write
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
