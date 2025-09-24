'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import Lottie from 'lottie-react';
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";
import MagicButton from "@/components/ui/MagicButton"; 

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-5 gap-4 lg:gap-8 mx-14",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('khushikhushi89978@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden shadow-input flex flex-col justify-between rounded-xl transition duration-200 hover:shadow-xl border border-white/[0.1] dark:shadow-none",
        className
      )}
      style={{
        background: '#010a27ff',
        backgroundColor:
          'linear-gradient(90deg,rgba(1, 11, 45, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)',
      }}
    >
      {/* Main image */}
      {img && (
        <div className="absolute inset-0">
          <Image
            src={img}
            alt="main-img"
            fill
            className="object-cover object-center"
          />
        </div>
      )}

      {/* Spare image on the bottom right */}
      {spareImg && (
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 pointer-events-none">
          <Image
            src={spareImg}
            alt="spare-img"
            fill
            className={cn("object-contain opacity-80", imgClassName)}
          />
        </div>
      )}

      {/* Background animation for id 6 */}
      {id === 6 && (
        <div className="absolute inset-0 z-0">
          <BackgroundGradientAnimation />
        </div>
      )}

      {/* Content with hover scale */}
      <div
        className={cn(
          titleClassName,
          "relative z-10 px-5 py-2 lg:p-10 flex flex-col justify-between h-full transition-transform duration-300 transform group-hover:scale-105"
        )}
      >
        {/* Description */}
        {description && (
          <p className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base mb-2">
            {description}
          </p>
        )}

        {/* Title */}
        {title && (
          <h2 className="font-sans font-bold text-lg lg:text-3xl text-white mb-4">
            {title}
          </h2>
        )}

        {/* Dynamic content */}
        {id === 2 && <GlobeDemo />}

        {id === 3 && (
          <div className="grid grid-cols-2 gap-2">
            {["React.js", "Next.js", "TypeScript", "Nodejs", "MongoDB", "Express"].map(
              (item, idx) => (
                <span
                  key={idx}
                  className="bg-[#10132e] text-center text-white text-xs px-2 py-1 rounded-lg"
                >
                  {item}
                </span>
              )
            )}
          </div>
        )}

        {id === 6 && (
          <div className="mt-5 relative">
            {/* Confetti animation */}
            {copied && (
              <div className="absolute -bottom-5 right-0 w-40 h-40 pointer-events-none">
                <Lottie
                  animationData={animationData}
                  loop={false}
                />
              </div>
            )}

            {/* Magic Button */}
            <MagicButton
              title={copied ? 'Email Copied!' : 'Copy my Email'}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
            />
          </div>
        )}
      </div>
    </div>
  );
};
