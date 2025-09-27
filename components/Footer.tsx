import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f0f1b] text-gray-300 py-10 px-6 sm:px-10 lg:px-20">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-8">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="hover:text-blue-400 transition-colors" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="hover:text-gray-400 transition-colors" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={24} className="hover:text-sky-400 transition-colors" />
        </a>
      </div>

      {/* Button Section */}
      <div className="flex justify-center">
        <a href="#contact">
          <MagicButton
            title="Get in Touch"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="w-full text-xs sm:text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4"
          />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 text-gray-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
