"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Heading */}
      <h1 className="text-[28px] sm:text-[36px] md:text-5xl lg:text-6xl font-bold text-center text-white relative z-20">
        Skills
      </h1>

      {/* Sparkles Container */}
      <div className="relative w-[90%] sm:w-[32rem] md:w-[40rem] h-[40vh] sm:h-[45vh] md:h-[50vh] mt-8">
        {/* Gradient Lines */}
        <div className="absolute left-0 right-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm" />
        <div className="absolute left-0 right-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />

        {/* Sparkles Core */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Smooth Edges with Radial Gradient */}
        <div className="absolute inset-0 w-full h-full bg-black 
          [mask-image:radial-gradient(400px_250px_at_top,transparent_20%,white)] 
          sm:[mask-image:radial-gradient(500px_300px_at_top,transparent_20%,white)] 
          md:[mask-image:radial-gradient(600px_350px_at_top,transparent_20%,white)]">
        </div>
      </div>
    </div>
  );
}
