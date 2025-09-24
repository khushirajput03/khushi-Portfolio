import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className='relative w-full pt-20 pb-10' id='contact'>
      {/* Background Grid */}
      <div className='absolute inset-0'>
        <Image
          src="/footer-grid.svg"
          fill
          alt="grid"
          className="w-full h-full opacity-40"
        />
      </div>

      {/* Content */}
      <div className='relative flex flex-col items-center text-center z-10'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your </span>
          digital presence to the next level?
        </h1>

        <p className='text-gray-400 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>

        <a href='mailto:khushikhushi89978@gmail.com'>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className='relative z-10 mt-16 flex flex-col items-center md:flex-row md:justify-between px-6'>
        {/* Copyright */}
        <p className='text-gray-400 pl-12 md:text-base text-sm'>
          © 2025 Khushi Singh. All rights reserved.
        </p>

        {/* Social Icons */}
       {/* Social Icons */}
<div className='flex gap-4 mt-4 md:mt-0 pr-12'>
  <a 
    href="https://github.com/khushirajput03" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition duration-300 transform hover:scale-110 hover-shadow-purple"
  >
    <FaGithub className="text-white text-lg" />
  </a>
  <a 
    href="https://twitter.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition duration-300 transform hover:scale-110 hover-shadow-blue"
  >
    <FaXTwitter className="text-white text-lg"/>

  </a>
  <a 
    href="https://www.linkedin.com/in/khushi-singh-576315297/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition duration-300 transform hover:scale-110 hover-shadow-cyan"
  >
    <FaLinkedin className="text-white text-lg" />
  </a>
</div>
      </div>
    </footer>
  )
}

export default Footer
