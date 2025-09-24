"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Item {
  id: number;
  title: string;
  description: string;
}

interface ApproachProps {
  items?: Item[]; // make items optional
}

const Approach: React.FC<ApproachProps> = ({ items = [] }) => {
  return (
    <section id="approach" className="relative z-10 bg-[#0f0f1b] py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
       

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "rounded-2xl bg-[#1a1a2e] p-6 shadow-lg hover:shadow-xl transition-shadow"
              )}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
