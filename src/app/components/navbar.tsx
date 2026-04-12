"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-8 px-8 py-3 bg-[#FAF7F2]/70 backdrop-blur-md border border-[#E5D9CC] rounded-full shadow-[0_8px_30px_rgba(62,47,37,0.08)]">

        {/* Home */}
        <Link href="/" className="relative text-sm text-[#3E2F25] group">
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#A47551] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Projects */}
        <Link href="#projects" className="relative text-sm text-[#3E2F25] group">
          Projects
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#A47551] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* About */}
        <Link href="#about" className="relative text-sm text-[#3E2F25] group">
          About
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#A47551] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Contact */}
        <Link href="#contact" className="relative text-sm text-[#3E2F25] group">
          Contact
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#A47551] transition-all duration-300 group-hover:w-full"></span>
        </Link>

      </nav>
    </div>
  );
}