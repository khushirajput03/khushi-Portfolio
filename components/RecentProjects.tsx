"use client";
import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <section id="recent-projects" className="relative z-10 bg-[#0f0f1b] py-20">
      {/* Heading */}
      <div className="mb-35">
        <h1 className="heading text-center relative z-10 text-3xl md:text-4xl font-bold">
          A small selection of{" "}
          <span className="text-purple-400">Recent Projects</span>
        </h1>
      </div>

      {/* Responsive grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                      lg:max-w-7xl mx-auto gap-8 md:gap-8 md:max-w-3xl mt-20 place-items-center 
                      space-y-35 lg:space-y-35 md:space-y-30">
        {projects.map(({ id, title, img, des, iconLists, link }) => (
          <div key={id} className="relative z-10 w-full">
            <PinContainer title={title} href={link} className="h-full relative z-0">
              {/* Card */}
              <div className="flex flex-col bg-[#0b0b10] border border-white/10 rounded-2xl overflow-hidden shadow-lg relative z-0 w-[350px] min-h-[430px]">
                
                {/* Image */}
                <div className="px-6">
                  <div className="rounded-xl bg-gradient-to-b from-[#0f1220] to-[#13162d] overflow-hidden w-full h-[220px] flex items-end justify-center">
                    <img
                      src={img}
                      alt={title}
                      className="object-contain w-[80%] translate-y-3"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-6 pb-6 pt-4">
                  <h1 className="font-bold text-white text-xl line-clamp-1">{title}</h1>

                  <p className="text-gray-400 text-sm font-light mt-2 line-clamp-2">{des}</p>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between pt-6 w-full">
                    {/* Tech icons */}
                    <div className="flex items-center space-x-3 flex-shrink-0">
                      {iconLists.map((icon, idx) => (
                        <div
                          key={idx}
                          className="w-10 h-10 rounded-full border border-white/20 bg-[#070708] flex items-center justify-center"
                        >
                          <img src={icon} alt={`tech-${idx}`} className="w-5 h-5" />
                        </div>
                      ))}
                    </div>

                    {/* Live site */}
                    <div className="flex items-center text-purple-400 text-sm whitespace-nowrap flex-shrink-0">
                      <p>Check Live Site</p>
                      <FaLocationArrow className="ml-2" color="#CBACF9" />
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
