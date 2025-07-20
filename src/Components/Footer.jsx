import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1e4a90] text-white px-4 py-10 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        
        {/* Logo & Social */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            <span className="text-white">DigitalTime</span>
            <span className="text-[#f3d576]">Capsule</span>
          </h1>
          <div className="flex space-x-4">
            <a href="#"><FaFacebookF className="text-2xl hover:text-gray-300" /></a>
            <a href="#"><FaTwitter className="text-2xl hover:text-gray-300" /></a>
            <a href="#"><FaInstagram className="text-2xl hover:text-gray-300" /></a>
          </div>
        </div>

        {/* Digital Network */}
        <div>
          <h2 className="font-bold mb-2">Digital Network</h2>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Youtube Channel</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h2 className="font-bold mb-2">Explore</h2>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Get Started */}
        <div>
          <h2 className="font-bold mb-2">Get Started</h2>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Sign In</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h2 className="font-bold mb-2">Policies</h2>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-200 mt-10">
        © 2025 Digital Time Capsule. All rights reserved.
      </div>
    </footer>
  );
}
