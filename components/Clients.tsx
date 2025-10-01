"use client";

import Image from "next/image";
import React from "react";
import { skills } from "@/data/index";

export interface Skill {
  name: string;
  img?: string;
}

const HALF = Math.ceil(skills.length / 2);
const stackOne: Skill[] = skills.slice(0, HALF);
const stackTwo: Skill[] = skills.slice(HALF);

interface SkillCardProps {
  item: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ item, index }) => (
  <div
    aria-label={`Skill: ${item.name}`}
    style={{ animationDelay: `${index * 0.1}s` }}
    className="w-full bg-gray-900/70 border border-blue-700/50 rounded-xl p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4
               backdrop-blur-sm shadow-[0_0_10px_rgba(0,180,255,0.4)]
               transition-transform transition-colors duration-500 ease-out
               hover:bg-gray-800/90 hover:shadow-none hover:border-blue-500"
  >
    {item.img && (
      <Image
        src={item.img}
        alt={item.name}
        width={48}
        height={48}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain"
        loading="lazy"
      />
    )}
    <span className="text-white font-semibold text-sm sm:text-base md:text-lg">
      {item.name}
    </span>
  </div>
);

const SkillsWaterfallStack: React.FC = () => {
  return (
    <section
      id="skills"
      className="min-h-screen mt-0 sm:mt[-60px] md:mt-[-70px] pb-10 w-full bg-black relative overflow-hidden group flex flex-col justify-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600
                      animate-[gradientShift_15s_ease_infinite] bg-[length:300%_300%] opacity-20">
      </div>

      {/* Container */}
      <div className="w-full lg:mt-[-10px] max-w-lg sm:max-w-xl md:max-w-6xl lg:max-w-7xl mx-auto px-3 sm:px-4">

        {/* Dual Stacks */}
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 space-y-6 md:space-y-0 perspective-container">
          {/* Stack One */}
          <div
            className="w-[80vw] md:w-6/12 lg:w-4/12 stack-one transition-transform duration-800"
            style={{ transformStyle: "preserve-3d" }}
          >
            {stackOne.map((item, index) => (
              <SkillCard key={item.name} item={item} index={index} />
            ))}
          </div>

          {/* Stack Two */}
          <div
            className="w-[80vw] md:w-6/12 lg:w-4/12 stack-two transition-transform duration-800"
            style={{ transformStyle: "preserve-3d" }}
          >
            {stackTwo.map((item, index) => (
              <SkillCard key={item.name} item={item} index={index + HALF} />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          .perspective-container {
            perspective: 1000px;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .group:hover .stack-one {
            transform: translate3d(-10px,0,10px) rotateX(1deg);
          }

          .group:hover .stack-two {
            transform: translate3d(10px,0,10px) rotateX(-1deg);
          }
        `}
      </style>
    </section>
  );
};

export default SkillsWaterfallStack;
