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

    // Duplicate items for infinite scroll illusion
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current.style.setProperty("--animation-duration", duration);

    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-nowrap gap-4 py-4 min-w-full",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative shrink-0 w-[45%] sm:w-[30%] md:w-[220px] lg:w-[180px] max-w-full"
          >
            {renderItem ? (
              renderItem(item)
            ) : item.quote ? (
              // Default testimonial card
              <div className="group rounded-2xl border border-zinc-200 bg-gradient-to-b from-[#fafafa] to-[#f5f5f5] px-6 py-4 dark:border-zinc-700 dark:from-[#27272a] dark:to-[#18181b] transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,0,255,0.6)] hover:scale-105">
                <blockquote>
                  <span className="text-sm text-neutral-800 dark:text-gray-100">
                    {item.quote}
                  </span>
                  <div className="mt-4 flex flex-col gap-1">
                    <span className="text-sm font-semibold text-neutral-500 dark:text-gray-400">
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
              <div className="group flex flex-col items-center justify-center cursor-pointer transition-all duration-300">
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full shadow-[0_0_15px_rgba(0,0,255,0.4)] transition-transform duration-300 group-hover:scale-125 group-hover:shadow-[0_0_25px_rgba(0,0,255,0.8)]"
                  />
                )}
                <span className="mt-2 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  {item.name}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>

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
