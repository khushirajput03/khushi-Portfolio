"use client";
import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { skills } from "@/data/index";

const Clients = () => {
  return (
    <div
      className="py-20 w-full bg-black relative overflow-hidden"
      id="skills"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-900 via-blue-600 to-indigo-700 animate-[gradientShift_15s_ease_infinite] bg-[length:300%_300%] opacity-20"></div>

      {/* Skills Section */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mt-20 mb-30 px-4">
        <span className="text-white">My</span> <span className="text-blue-40z0">Skills</span>
      </h2>
      
      <div className="w-full max-w-7xl mx-auto px-4"> {/* Added container with max-width and padding */}
        <InfiniteMovingCards
          items={skills}
          direction="left"
          speed="fast"
          renderItem={(item) => (
            <div className="group flex flex-col items-center justify-center cursor-pointer relative">
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full text-white shadow-[0_0_15px_rgba(0,0,255,0.5)] transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:shadow-[0_0_25px_rgba(0,0,255,0.8)]"
                />
              )}
              {/* Name appears only on hover */}
              <span className="mt-6 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                {item.name}
              </span>
            </div>
          )}
        />
      </div>

      {/* Tailwind animation keyframes */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default Clients;