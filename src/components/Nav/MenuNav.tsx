"use client";
import Link from "next/link";

import { Link as ScrollLink } from "react-scroll";

export function MenuNav() {
  return (
    <nav className="relative w-full">
      <div className="fixed z-50 w-full flex justify-center gap-10 bg-light-green md:text-2xl font-thin p-2">
        <ScrollLink to="omplantering" smooth={true} offset={-150}>
          <Link href="/#omplantering">Vår service</Link>
        </ScrollLink>
        <Link href="/booking/products">Boka</Link>
      </div>
    </nav>
  );
}
