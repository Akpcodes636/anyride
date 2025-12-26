"use client";
import Logo from "../ui/Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNav = () => {
  return (
    <div className="max-w-full container md:block lg:block xl:hidden">
      <div className="flex items-center justify-between">
        <div className="">
          <Logo />
        </div>
        <div className="flex items-center justify-end gap-2 w-full">
          <LanguageSwitcher />
          <GiHamburgerMenu size={24} color="#02093A" />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
