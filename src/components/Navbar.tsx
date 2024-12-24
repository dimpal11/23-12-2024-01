"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/Image/logo.svg";
import dropdown from "@/Image/dropdown.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#F6F7FB] z-10">
        <div className="mx-auto flex items-center justify-between p-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Image src={logo} width={120} height={40} alt="logo" />
          </div>

          {/* Hamburger Menu Button (Mobile Only) */}
          <div className="md:hidden">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                // Close Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-[#E6A371] uppercase text-xs font-bold">
              Home
            </a>
            <a href="#" className="hover:text-[#E6A371] uppercase text-xs font-bold">
              Features
            </a>
            <a href="#" className="hover:text-[#E6A371] uppercase text-xs font-bold">
              About Us
            </a>
            <a
              href="#"
              className="hover:text-[#E6A371] uppercase text-xs font-bold flex gap-2"
            >
              Product
              <span>
                <Image src={dropdown} alt="dropdown" />
              </span>
            </a>
            <a href="#" className="hover:text-[#E6A371] uppercase text-xs font-bold">
              Contact Us
            </a>
            <button className="text-sm border border-black rounded py-2 px-4 font-bold">
              LOG IN
            </button>
            <button className="bg-[#E6A371] text-white py-2 px-4 rounded-sm text-sm uppercase font-bold">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#F6F7FB] px-4 pb-4">
            <a href="#" className="block text-[#E6A371] uppercase text-xs font-bold py-2">
              Home
            </a>
            <a
              href="#"
              className="block hover:text-[#E6A371] uppercase text-xs font-bold py-2"
            >
              Features
            </a>
            <a
              href="#"
              className="block hover:text-[#E6A371] uppercase text-xs font-bold py-2"
            >
              About Us
            </a>
            <a
              href="#"
              className="block hover:text-[#E6A371] uppercase text-xs font-bold  gap-2 py-2"
            >
              Product
              <span>
                <Image src={dropdown} alt="dropdown" />
              </span>
            </a>
            <a
              href="#"
              className="block hover:text-[#E6A371] uppercase text-xs font-bold py-2"
            >
              Contact Us
            </a>
            <button className="block w-full text-sm border hover:bg-[#E6A371] border-black rounded py-2 mt-2 font-bold">
              LOG IN
            </button>
            <button className="block w-full bg-[#E6A371] text-white py-2 mt-2 rounded-sm text-sm uppercase font-bold">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
