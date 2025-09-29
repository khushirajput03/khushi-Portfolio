"use client";

import Image from "next/image";
import React from "react";
import { skills } from "@/data/index";

// 1️⃣ Define type for a single skill
export interface Skill {
  name: string;
  img?: string; // optional image
}

// 2️⃣ Slice skills into two stacks
const HALF = Math.ceil(skills.length / 2);
const stackOne: Skill[] = skills.slice(0, HALF);
const stackTwo: Skill[] = skills.slice(HALF);

// 3️⃣ Props interface for SkillCard
interface SkillCardProps {
  item: Skill;
  index: number;
}

// 4️⃣ SkillCard Component
const SkillCard: React.FC<SkillCardProps> = ({ item, index }) => (
  <div
    style={{ animationDelay: `${index * 0.1}s` }}
    className="w-full bg-gray-900/70 border border-blue-700/50 rounded-xl p-4 flex items-center space-x-4 mb-4
               backdrop-blur-sm shadow-[0_0_10px_rgba(0,180,255,0.4)] transition-all duration-500 ease-out
               hover:bg-gray-800/90 hover:shadow-none hover:border-blue-500"
  >
    {item.img && (
      <Image
        src={item.img}
        alt={item.name}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-contain"
      />
    )}
    <span className="text-white font-semibold text-base sm:text-lg">{item.name}</span>
  </div>
);

// 5️⃣ Main Waterfall Stack Component
const SkillsWaterfallStack: React.FC = () => {
  return (
    <section
      id="skills"
      className="pt-10 pb-6 w-full bg-black relative overflow-hidden group"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600
                      animate-[gradientShift_15s_ease_infinite] bg-[length:300%_300%] opacity-20">
      </div>

      {/* Container */}
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          My Technical Stack
        </h2>

        {/* Dual Stacks */}
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 space-y-8 md:space-y-0 perspective-container">
          {/* Stack One */}
          <div className="w-full md:w-5/12 lg:w-4/12 stack-one" style={{ transformStyle: "preserve-3d" }}>
            {stackOne.map((item, index) => (
              <SkillCard key={item.name} item={item} index={index} />
            ))}
          </div>

          {/* Stack Two */}
          <div className="w-full md:w-5/12 lg:w-4/12 stack-two" style={{ transformStyle: "preserve-3d" }}>
            {stackTwo.map((item, index) => (
              <SkillCard key={item.name} item={item} index={index + HALF} />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .group:hover .stack-one {
            transform: translate3d(-10px,0,10px) rotateX(1deg);
            transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94);
          }
          .group:hover .stack-two {
            transform: translate3d(10px,0,10px) rotateX(-1deg);
            transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94);
          }
        `}
      </style>
    </section>
  );
};

export default SkillsWaterfallStack;
