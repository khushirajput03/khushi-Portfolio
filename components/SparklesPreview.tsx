"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden px-4 py-16 sm:py-10 rounded-md">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-white relative z-20">
        Skills
      </h1>

      {/* Sparkles Container */}
      <div className="relative w-full max-w-4xl h-38 sm:h-36 md:h-40 mt-6">
        {/* Gradient Lines */}
        <div className="absolute left-0 right-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm" />
        <div className="absolute left-0 right-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />

        {/* Sparkles */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={900}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Smooth Fade */}
        <div
          className="absolute inset-0 w-full h-full bg-black
          [mask-image:radial-gradient(70%_60%_at_top,transparent_15%,white)]"
        ></div>
      </div>
    </div>
  );
}
