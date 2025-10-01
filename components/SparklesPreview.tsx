"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[20rem] sm:h-[25rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="text-[24px] sm:text-[30px] md:text-4xl lg:text-5xl font-bold text-center text-white relative z-20">
        Skills
      </h1>

      <div className="w-[90%] sm:w-[30rem] md:w-[40rem] h-32 sm:h-36 md:h-40 relative mt-6">
        {/* Gradients */}
        <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] sm:w-3/4 w-full blur-sm" />
        <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px sm:w-3/4 w-full" />
        <div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] sm:h-[5px] w-1/3 sm:w-1/4 blur-sm" />
        <div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/3 sm:w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={800} // slightly reduced for mobile perf
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(250px_150px_at_top,transparent_20%,white)] sm:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
