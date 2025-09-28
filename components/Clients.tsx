"use client";
import Image from "next/image";
import React from "react";
// Assuming 'skills' is an array of objects like:
// { id: number, name: string, img: string }
import { skills } from "@/data/index";

const NeonSpotlightSkills = () => {
  return (
    // Main container: Extremely dark background
    <section className=" w-full bg-[#000005] mt-[-90px] " id="skills">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Skills Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((item) => (
            // Individual Skill Card
            <div
              key={item.id}
              className="group relative flex flex-col items-center justify-center p-6 rounded-xl 
                       bg-gray-950/70 border border-gray-800 cursor-pointer overflow-hidden
                       transition-all duration-500 ease-out hover:border-blue-500/50 
                       hover:scale-[1.05] shadow-2xl shadow-transparent hover:shadow-blue-900/40 mb-7"
            >
                {/* 1. The Neon Spotlight Effect (Internal Radial Gradient) */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at center, #ec489930 0%, transparent 70%)', // Pink glow
                        filter: 'blur(30px)',
                    }}
                ></div>

                {/* 2. Content (Image & Name) */}
                <div className="relative z-10 flex flex-col items-center">
                    {item.img && (
                        <Image
                            src={item.img}
                            alt={item.name}
                            width={72}
                            height={72}
                            // Icon styling
                            className="w-16 h-16 transition-transform duration-300 ease-in-out mb-4 
                                       group-hover:scale-110"
                        />
                    )}

                    {/* Skill Name */}
                    <span className="text-white font-semibold text-center text-sm mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {item.name}
                    </span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeonSpotlightSkills;