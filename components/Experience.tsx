"use client";
import React, { useRef } from "react";
import { workExperience } from "@/data";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";


// Helper class concatenator
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

// Button with glowing border
function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: any) {
  return (
    <Component
      className={cn(
        "relative overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      {/* Glowing border */}
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      {/* Inner content */}
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </Component>
  );
}

// Moving border animation
const MovingBorder = ({ children, duration = 3000, rx, ry, ...otherProps }: any) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div
        style={{ position: "absolute", top: 0, left: 0, display: "inline-block", transform }}
      >
        {children}
      </motion.div>
    </>
  );
};

// Main Component
export default function App() {
  return (
    <div className="py-16 sm:py-20 bg-[#0f0f1b]" id="testimonials">
      <h1 className="heading text-center px-4 sm:px-8 md:px-16 text-white text-2xl sm:text-3xl md:text-4xl font-bold">
        My <span className="text-purple-400"> Work Experience</span>
      </h1>

      <div className="w-full mt-10 flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 5000 + 5000)}
            borderRadius="1rem"
            className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl 
                       w-full flex flex-col sm:flex-row items-center 
                       text-white px-4 sm:px-6 md:px-8 lg:px-10 
                       py-2 sm:py-4 md:py-9 bg-[#1f2235]/90 backdrop-blur-sm"
            borderClassName="absolute inset-0 rounded-[1rem] 
              bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-purple-400 
              bg-[length:200%_200%] animate-gradient-move 
              shadow-[0_0_20px_rgba(236,72,153,0.8),0_0_40px_rgba(34,211,238,0.7),0_0_60px_rgba(192,132,252,0.6)]"
          >
            {/* Thumbnail */}
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-4 sm:mb-0 sm:mr-6 shrink-0">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="object-contain w-full h-full"
              />
            </div>
            {/* Content */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                {card.title}
              </h1>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed break-words">
                {card.desc}
              </p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
