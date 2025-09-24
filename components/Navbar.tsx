'use client';
import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link"

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
 <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-100 text-white bg-black", className)}
    >
      <Menu  setActive={setActive}>
        <Link href={"#about"}>
        <MenuItem setActive={setActive} active={active}  item="About">
        </MenuItem>
        </Link>
        <Link href={"#recent-projects"}>
        <MenuItem setActive={setActive} active={active}  item="Project">
        </MenuItem>
        </Link>
          <Link href={"#skills"}>
        <MenuItem setActive={setActive} active={active}  item="Skills">
        </MenuItem>
        </Link>
        <Link href={"#contact"}>
        <MenuItem setActive={setActive} active={active}  item="Contact">
        </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
