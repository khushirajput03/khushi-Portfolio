"use client";
import Image from "next/image";
import React from "react";
import { skills } from "@/data/index"; // { id, name, img }

const NeonSpotlightSkills = () => {
  return (
    <section className="w-full bg-[#000005] py-16 px-4" id="skills">
      <div className="w-full max-w-7xl mx-auto">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {skills.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl 
                         bg-gray-950/70 border border-gray-800 cursor-pointer overflow-hidden
                         transition-all duration-500 ease-out hover:border-blue-500/50 
                         hover:scale-[1.05] shadow-2xl shadow-transparent hover:shadow-blue-900/40"
            >
              {/* Neon Spotlight Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, #ec489930 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              ></div>

              {/* Icon & Name */}
              <div className="relative z-10 flex flex-col items-center">
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 ease-in-out mb-3 group-hover:scale-110"
                  />
                )}
                <span className="text-white font-medium text-xs sm:text-sm md:text-base text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
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
