"use client"
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import img from './resources/logo.png'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent text-white py-4 px-8">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src={img} alt="Logo" width={150} height={85} />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="/careers" className="hover:text-gray-400">
            Careers
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>

        {/* Login Button (visible on all screens) */}
        <div className="hidden md:block">
          <Link href="/login" className="hover:text-gray-400">
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block hover:text-gray-400">
            Home
          </Link>
          <Link href="/services" className="block hover:text-gray-400">
            Services
          </Link>
          <Link href="/careers" className="block hover:text-gray-400">
            Careers
          </Link>
          <Link href="/contact" className="block hover:text-gray-400">
            Contact
          </Link>
          <Link href="/login" className="block hover:text-gray-400">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
