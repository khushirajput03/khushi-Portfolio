import React from 'react';
import Link from 'next/link';
import { Spotlight } from './ui/Spotlight';
import { Button } from "./ui/moving-border";
import { IoIosSend } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full flex flex-col items-center justify-center relative overflow-hidden py-10 md:py-0 min-h-screen'>
      <Spotlight
        className="-top-40 md:-top-20 md:left-60 z-10 w-full"
        fill="white"
      />

      <div className='p-4 relative z-10 w-full text-center'>
        <h1 className='mt-20 md:mt-0 text-3xl lg:text-7xl sm:pr-4 sm:pl-4 md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-40'>
          Building complete web apps from
        </h1>
        <h1 className='mt-6 md:mt-0 text-3xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-40'>
          frontend to backend.
        </h1>

        <p className='mt-8 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
          Hi, I&apos;m Khushi — a Full Stack Developer
        </p>

        <div className='mt-10'>
          <Link href={"#recent-project"}>
            <Button
              borderRadius="1.75rem"
              className="p-4 dark:bg-slate-900 gap-2 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Show my Work <IoIosSend />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
