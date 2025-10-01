"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (
    <>
 <h1 className="heading text-center relative mt-20 z-10 text-3xl md:text-4xl font-bold">
        My
          <span className="text-purple-400"> Approach</span>
  </h1>
      <div className="py-10 sm:py-20 flex flex-col lg:flex-row items-center justify-center bg-black w-full gap-6 sm:gap-8 mx-auto px-4 sm:px-8">
        {/* Card 1: Understand & Deconstruct */}
        
        <Card
          title="Understand & Deconstruct"
          description="Break down the problem into modular components by identifying system bottlenecks, user requirements, and security constraints."
          phaseNumber="Phase 1"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        {/* Card 2: Design & Build */}
        <Card
          title="Design & Build"
          description="Rapidly prototype and implement scalable, secure solutions using containerized microservices, API integrations, and cloud-native tools."
          phaseNumber="Phase 2"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50" />
        </Card>
        {/* Card 3: Test, Optimize & Deploy */}
        <Card
          title="Test, Optimize & Deploy"
          description="Validate functionality with CI pipelines, enhance performance via observability and logging, and deploy securely using VPNs, tunnels, and automated workflows."
          phaseNumber="Phase 3"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  description,
  phaseNumber,
  children,
}: {
  title: string;
  description?: string;
  phaseNumber: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [tapped, setTapped] = React.useState(false);

  const handleTap = () => {
    setTapped(!tapped);
  };

  const showContent = hovered || tapped;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleTap}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center 
                 bg-black/50 w-full max-w-[18rem] sm:max-w-sm md:max-w-md 
                 mx-auto p-4 relative h-[20rem] sm:h-[26rem] md:h-[30rem] 
                 cursor-pointer touch-manipulation"
    >
      {/* Corners */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white/[0.6]" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white/[0.6]" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white/[0.6]" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white/[0.6]" />

      {/* Canvas animation */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20">
        <div
          className={`text-center ${
            showContent
              ? "-translate-y-4 opacity-0"
              : "opacity-100"
          } transition duration-200 w-full mx-auto flex items-center justify-center`}
        >
          <div className="px-5 py-2 rounded-full border border-white text-white text-base sm:text-lg font-medium">
            {phaseNumber}
          </div>
        </div>
        <h2
          className={`text-white text-lg sm:text-2xl md:text-3xl ${
            showContent ? "opacity-100 -translate-y-2" : "opacity-0"
          } relative z-10 text-center mt-4 font-bold transition duration-200`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`text-white text-sm sm:text-base md:text-lg ${
              showContent ? "opacity-100 -translate-y-2" : "opacity-0"
            } relative z-10 text-center mt-2 transition duration-200`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
