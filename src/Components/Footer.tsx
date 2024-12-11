// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import './resources/footer.css'
import img from "./resources/logo.png";
import linkedin from './resources/linkedin.png';
import instagram from './resources/instagram.png';
import youtube from './resources/youtube.png';
import QR from './resources/QR.png';

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white py-8 px-4 md:px-16 lg:px-32">
      {/* Logo */}
      <div className="flex items-center justify-center w-[100%] space-x-2 mb-5">
        <Image src={img} alt="WebInOrbit Logo" width={350} height={120} />
      </div>
      <div className="container md:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
        {/* Left Section - Logo and Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          {/* Contact Information */}
          <div className="mt-4 text-center md:text-left">
            <p>3547 Sector: 23 D Chandigarh, India</p>
            <p>Email: teamorbit@webinorbit.com</p>
            <p>Phone: +91 8054776034</p>
          </div>

          {/* Social Media Icons */}
          <div className="social flex space-x-4 mt-4">
            <Link href="https://linkedin.com">
              <Image
                src={linkedin}
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://instagram.com">
              <Image
                src={instagram}
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://youtube.com">
              <Image
                src={youtube}
                alt="Youtube"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* Center Section - Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-gray-400">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-400">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-gray-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - QR Code */}
        <div className="flex justify-center md:justify-end">
        
        </div>
      </div>
      {/* Copyright Section */}
      <div className="flex items-center justify-center w-[100%] space-x-2 mb-5">
        <p className="mt-4 text-center md:text-left">&copy; 2024 Stubic Solutions Private Limited. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
