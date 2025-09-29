"use client";
import Image from "next/image";
import React from "react";
import { skills } from "@/data/index";

// Define the type for a single skill item
type Skill = {
  name: string;
  img?: string;
};

const HALF = Math.ceil(skills.length / 2);
const stackOne = skills.slice(0, HALF);
const stackTwo = skills.slice(HALF);

// Define the props interface for the SkillCard
interface SkillCardProps {
  item: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ item, index }) => (
  <div
    style={{ animationDelay: `${index * 0.1}s` }}
    // The entrance animation class is missing here, but let's assume it's implied or not needed.
    className="w-full bg-gray-900/70 border border-blue-700/50 rounded-xl p-4 flex items-center space-x-4 mb-4 backdrop-blur-sm 
               shadow-[0_0_10px_rgba(0,180,255,0.4)] transition-all duration-500 ease-out 
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

const SkillsWaterfallStack = () => {
  return (
    <div
      // Adjusted vertical spacing for tighter fit (was py-6, now custom spacing)
      className="pt-10 pb-6 w-full bg-black relative overflow-hidden group" 
      id="skills"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 animate-[gradientShift_15s_ease_infinite] bg-[length:300%_300%] opacity-20"></div>

      {/* CONTAINER CHANGE: Use max-w-lg (or max-w-xl) on mobile, then max-w-7xl on desktop */}
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-7xl mx-auto px-4">
        
        {/* Added H2 title back for context */}
        <h2 className="text-3xl font-bold text-center text-white mb-6"> 
          My Technical Stack
        </h2>

        {/* The Dual Stack Container */}
        <div
          className="flex flex-col md:flex-row justify-center items-start md:space-x-8 space-y-8 md:space-y-0 px-0 perspective-container"
        >
          {/* Stack One */}
          <div
            className="w-full md:w-5/12 lg:w-4/12 stack-one"
            style={{ transformStyle: "preserve-3d" }}
          >
            {stackOne.map((item, index) => (
              <SkillCard key={item.name} item={item} index={index} />
            ))}
          </div>

          {/* Stack Two */}
          <div
            className="w-full md:w-5/12 lg:w-4/12 stack-two"
            style={{ transformStyle: "preserve-3d" }}
          >
            {stackTwo.map((item, index) => (
              <SkillCard key={item.name} item={item} index={index + HALF} />
            ))}
          </div>
        </div>
      </div>

      {/* FIX: Restored the essential <style> block for CSS animations */}
      <style>
        {`
          /* Background Shift Animation */
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* Parallax Hover Effect: Shifts stacks when the parent is hovered */
          .group:hover .stack-one {
            transform: translate3d(-10px, 0, 10px) rotateX(1deg);
            transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
          }
          .group:hover .stack-two {
            transform: translate3d(10px, 0, 10px) rotateX(-1deg);
            transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          /* Initial Entrance Animation (needed if you had skill-card-entrance class) */
          @keyframes cardEntrance {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default SkillsWaterfallStack;