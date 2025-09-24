"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type CardItem = {
  quote?: string;
  name: string;
  title?: string;
  img?: string;
  feedback?: string;
};

interface InfiniteMovingCardsProps {
  items: CardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  renderItem?: (item: CardItem) => React.ReactNode;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  renderItem,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);

    // Duplicate items to create infinite scroll illusion
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    // Set CSS variables for animation
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current.style.setProperty("--animation-duration", duration);

    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={idx} className="relative w-[300px] max-w-full shrink-0">
            {renderItem ? (
              renderItem(item)
            ) : item.quote ? (
              // Default testimonial card
              <div className="group rounded-2xl border border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,0,255,0.6)] hover:scale-105">
                <blockquote>
                  <span className="text-sm text-neutral-800 dark:text-gray-100">
                    {item.quote}
                  </span>
                  <div className="mt-6 flex flex-col gap-1">
                    <span className="text-sm font-semibold text-neutral-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.name}
                    </span>
                    {item.title && (
                      <span className="text-sm text-neutral-500 dark:text-gray-400">
                        {item.title}
                      </span>
                    )}
                  </div>
                </blockquote>
              </div>
            ) : (
              // Default skill card
              <div className="group flex flex-col items-center justify-center m-4 cursor-pointer transition-all duration-300">
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 mb-2 rounded-full shadow-[0_0_15px_rgba(0,0,255,0.4)] transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:shadow-[0_0_25px_rgba(0,0,255,0.8)]"
                  />
                )}
                <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.name}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Tailwind animation keyframes */}
      <style>
        {`
          @keyframes scroll {
            to {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll var(--animation-duration,40s) linear infinite;
            animation-direction: var(--animation-direction,forwards);
          }
        `}
      </style>
    </div>
  );
};
