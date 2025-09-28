'use client';
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu"; 
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 mx-auto left-0 z-100 text-white bg-black",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"#about"}>
          <MenuItem setActive={setActive} active={active} item="About" />
        </Link>
        <Link href={"#recent-projects"}>
          <MenuItem setActive={setActive} active={active} item="Project" />
        </Link>
        <Link href={"#skills"}>
          <MenuItem setActive={setActive} active={active} item="Skills" />
        </Link>
        <Link href={"#contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
