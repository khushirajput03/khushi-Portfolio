"use client";
import Image from "next/image";
import React from "react";
import { skills } from "@/data/index";


const HALF = Math.ceil(skills.length / 2);
const stackOne = skills.slice(0, HALF);
const stackTwo = skills.slice(HALF);

const SkillCard = ({ item, index }) => (
  <div
    style={{ animationDelay: `${index * 0.1}s` }}
    // Shadow is visible by default, disappears on hover
    className="mt-[40px] w-full bg-gray-900/70 border border-blue-700/50 rounded-xl p-4 flex items-center space-x-4 mb-4 backdrop-blur-sm 
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

      className="w-full mt-[-130px] bg-black relative overflow-hidden group" 
      id="skills"
    >

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 animate-[gradientShift_15s_ease_infinite] bg-[length:300%_300%] opacity-20"></div>


      <div className="w-full max-w-lg sm:max-w-xl md:max-w-7xl mx-auto px-4">
        <div
          className="flex flex-col md:flex-row justify-center items-start md:space-x-8 space-y-8 md:space-y-0 px-0 perspective-container"
        >
          <div
            className="w-full md:w-5/12 lg:w-4/12 stack-one"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {stackOne.map((item, index) => (
              <SkillCard key={item.name} item={item} index={index} />
            ))}
          </div>
          <div
            className="w-full md:w-5/12 lg:w-4/12 stack-two"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {stackTwo.map((item, index) => (
              <SkillCard key={item.name} item={item} index={index + HALF} />
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          /* Background Shift Animation (Same as before) */
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

          /* Initial Entrance Animation */
          @keyframes cardEntrance {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .skill-card-entrance {
            opacity: 0; 
            animation: cardEntrance 0.5s ease-out forwards;
            animation-delay: var(--delay); 
          }
        `}
      </style>
    </div>
  );
};

export default SkillsWaterfallStack;