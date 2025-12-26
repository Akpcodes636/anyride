"use client";

import Logo from "../ui/Logo";
import { ChevronDown } from "lucide-react";

import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "../ui/Button";
import { navLinks } from "@/app/utils/Content";

const Navbar = () => {
  return (
    <nav className="hidden md:hidden lg:hidden xl:block px-4">
      <div className="flex items-center justify-between">
        <Logo />
        <div>
          <ul className="flex items-center justify-center gap-12">
            {navLinks.map((l, i) => (
              <li key={i} className="flex items-center gap-1 cursor-pointer">
                <Link
                  href={l.router}
                  className="text-[18px] text-text-black font-medium leading-[120%] tracking-[-2%]"
                >
                  {l.title}
                </Link>

                {l.hasDropdown && (
                  <ChevronDown size={16} className="mt-0.5" />
                )}
              </li>
            ))}

            <LanguageSwitcher />
          </ul>
        </div>

        <div className="flex gap-2">
          <Button type="button" style="nobg" css="w-[117px] h-[62px]">
            Login
          </Button>
          <Button type="button" style="danger" css="w-[161px] h-[62px]">
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
