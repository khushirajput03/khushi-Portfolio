"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState("rotateX(0deg) scale(1)");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const onMouseEnter = () => {
    if (!isMobile) setTransform("rotateX(15deg) scale(0.95)");
  };

  const onMouseLeave = () => {
    if (!isMobile) setTransform("rotateX(0deg) scale(1)");
  };

  const handleClick = () => {
    if (href) window.open(href, "_blank");
  };

  return (
    <div
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
    >
      {isMobile ? (
        // Mobile: no rotation, extra vertical space
        <div className="w-full h-full mb-6">
          <div className={cn("w-full h-full", className)}>{children}</div>
        </div>
      ) : (
        // Desktop: 3D rotation
        <div style={{ perspective: "1000px" }} className="flex items-center justify-center">
          <motion.div
            style={{ transform }}
            animate={{ transform }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className={cn(
              "p-4 rounded-2xl border border-white/[0.1] shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-500",
              className
            )}
          >
            {children}
          </motion.div>
          {title && <PinPerspective title={title} />}
        </div>
      )}
    </div>
  );
};

export const PinPerspective = ({ title }: { title?: string }) => {
  return (
    <motion.div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="relative inline-flex items-center bg-zinc-950 py-1 px-3 rounded-full ring-1 ring-white/10">
        <span className="text-white text-xs font-bold">{title}</span>
      </div>
    </motion.div>
  );
};
