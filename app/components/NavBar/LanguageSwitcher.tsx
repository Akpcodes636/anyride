"use client";
import { Globe, ChevronDown } from "lucide-react";
// import { useState } from "react";

const LanguageSwitcher = () => {
//   const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        // onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-[#F5F5F7]
        w-17.25 md:w-22.5 lg:w-25.75
        h-8 md:h-12 lg:h-14
        px-3 rounded-full"
      >
        <Globe size={16} />
        <span className="text-[10px] md:text-[16px] lg:text-[16px] text-text-accent font-normal tracking-[-2%]">EN</span>
        <ChevronDown size={14} />
      </button>

      {/* {open && (
        <div className="absolute top-8 mt-2 w-full rounded-lg bg-red-800 shadow-md">
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
            EN
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
            FR
          </button>
        </div>
      )} */}
    </div>
  );
};

export default LanguageSwitcher;
