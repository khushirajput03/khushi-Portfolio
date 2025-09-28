import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative w-full pt-12 pb-6 md:pt-16 md:pb-8 lg:pt-20 lg:pb-10"
      id="contact"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/footer-grid.svg"
          fill
          alt="grid"
          className="w-full h-full opacity-40 object-cover"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center text-center z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold max-w-[90vw] sm:max-w-[80vw] md:max-w-3xl leading-snug md:leading-normal text-white">
          Ready to take <span className="text-purple-400">your</span> digital presence
          to the next level?
        </h1>

        <p className="text-gray-400 mt-4 md:mt-6 mb-4 md:mb-6 max-w-[85vw] sm:max-w-xl text-xs sm:text-sm md:text-base lg:text-lg">
          Reach out to me today and let&apos;s discuss how I can help you achieve
          your goals.
        </p>

        <a
          href="mailto:khushikhushi89978@gmail.com"
          className="w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="w-full text-xs sm:text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4"
          />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-8 md:mt-12 lg:mt-16 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto gap-3 md:gap-4">
        <p className="text-gray-400 text-xs md:text-sm order-2 md:order-1">
          © 2025 Khushi Singh. All rights reserved.
        </p>

        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 order-1 md:order-2">
          <a
            href="https://github.com/khushirajput03"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition duration-300 hover:scale-110 active:scale-95"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-white text-sm sm:text-base md:text-lg" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition duration-300 hover:scale-110 active:scale-95"
            aria-label="Twitter Profile"
          >
            <FaXTwitter className="text-white text-sm sm:text-base md:text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/khushi-singh-576315297/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition duration-300 hover:scale-110 active:scale-95"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-white text-sm sm:text-base md:text-lg" />
          </a>
        </div>
      </div>

      <div className="h-4 md:h-2 lg:h-0"></div>
    </footer>
  );
};

export default Footer;
