"use client";

import { MdSmartToy } from "react-icons/md";

export default function ChatbotButton() {
  return (
    <div className="fixed bottom-24 right-6 z-50 group">

      {/* Button */}
      <button
        className="w-12 h-12 rounded-full flex items-center justify-center bg-[#FAF7F2] border border-[#E5D9CC] shadow-[0_8px_25px_rgba(62,47,37,0.12)] hover:scale-110 transition duration-300"
      >
        <MdSmartToy size={22} className="text-[#3E2F25]" />
      </button>

      {/* Tooltip */}
      <span
        className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#3E2F25] text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap"
      >
        Hi! Ask me...
      </span>

    </div>
  );
}