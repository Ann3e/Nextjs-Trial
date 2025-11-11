"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl">
          Mistral AI
        </Link>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center p-2 w-10 h-10 text-gray-400 rounded-lg lg:hidden focus:outline-none hover:text-white"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/products" className="text-gray-300 hover:text-white">
            Products
          </Link>
          <Link href="/solutions" className="text-gray-300 hover:text-white">
            Solutions
          </Link>
          <Link href="/research" className="text-gray-300 hover:text-white">
            Research
          </Link>
          <Link href="/resources" className="text-gray-300 hover:text-white">
            Resources
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white">
            Pricing
          </Link>
          <Link href="/company" className="text-gray-300 hover:text-white">
            Company
          </Link>

          <Link href="/ai-studio" className="text-white hover:text-gray-300">
            Try AI Studio
          </Link>
          <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200">
            Talk to sales
          </button>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile & Tablet menu drawer */}
      <div
        className={`fixed top-0 right-0 h-screen z-50 bg-black border-l border-white/10 px-6 py-6 flex flex-col justify-between w-full md:w-1/2 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button inside the drawer */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-gray-400 hover:text-white focus:outline-none"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Links */}
        <div className="flex flex-col mt-16">
          <Link href="/products" className="block text-gray-300 hover:text-white px-6 py-4">
            Products
          </Link>
          <Link href="/solutions" className="block text-gray-300 hover:text-white px-6 py-4">
            Solutions
          </Link>
          <Link href="/research" className="block text-gray-300 hover:text-white px-6 py-4">
            Research
          </Link>
          <Link href="/resources" className="block text-gray-300 hover:text-white px-6 py-4">
            Resources
          </Link>
          <Link href="/pricing" className="block text-gray-300 hover:text-white px-6 py-4">
            Pricing
          </Link>
          <Link href="/company" className="block text-gray-300 hover:text-white px-6 py-4">
            Company
          </Link>
        </div>

        {/* Buttons */}
        <div className="space-y-3 mb-6">
          <button className="w-full px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200">
            Talk to AI Studio
          </button>
          <button className="w-full px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200">
            Talk to sales
          </button>
        </div>
      </div>
    </nav>
  );
}
