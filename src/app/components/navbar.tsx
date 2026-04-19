"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];

      for (let section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-8 px-8 py-3 bg-[#FAF7F2]/70 backdrop-blur-md border border-[#E5D9CC] rounded-full shadow-[0_8px_30px_rgba(62,47,37,0.08)]">

       {/* Home */}
{/* Home */}
<Link
  href="/#home"
  className={`relative text-sm transition duration-300 group ${
    active === "home"
      ? "text-[#3E2F25] drop-shadow-[0_0_6px_rgba(164,117,81,0.4)]"
      : "text-[#7A6A5F]"
  }`}
>
  Home
  <span className="absolute left-0 -bottom-1 h-[1px] bg-[#A47551] w-0 transition-all duration-300 group-hover:w-full"></span>
</Link>

{/* Projects */}
<Link
  href="/#projects"
  className={`relative text-sm transition duration-300 group ${
    active === "projects"
      ? "text-[#3E2F25] drop-shadow-[0_0_6px_rgba(164,117,81,0.4)]"
      : "text-[#7A6A5F]"
  }`}
>
  Projects
  <span className="absolute left-0 -bottom-1 h-[1px] bg-[#A47551] w-0 transition-all duration-300 group-hover:w-full"></span>
</Link>

{/* About */}
<Link
  href="/#about"
  className={`relative text-sm transition duration-300 group ${
    active === "about"
      ? "text-[#3E2F25] drop-shadow-[0_0_6px_rgba(164,117,81,0.4)]"
      : "text-[#7A6A5F]"
  }`}
>
  About
  <span className="absolute left-0 -bottom-1 h-[1px] bg-[#A47551] w-0 transition-all duration-300 group-hover:w-full"></span>
</Link>

{/* Contact */}
<Link
  href="/#contact"
  className={`relative text-sm transition duration-300 group ${
    active === "contact"
      ? "text-[#3E2F25] drop-shadow-[0_0_6px_rgba(164,117,81,0.4)]"
      : "text-[#7A6A5F]"
  }`}
>
  Contact
  <span className="absolute left-0 -bottom-1 h-[1px] bg-[#A47551] w-0 transition-all duration-300 group-hover:w-full"></span>
</Link>

      </nav>
    </div>
  )
}