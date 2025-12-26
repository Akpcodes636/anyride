"use client";
import React, { useState, FC } from "react";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer rounded-[50px] px-6 py-4 text-[16px] font-semibold text-white transition-all duration-150
        ${isActive ? "bg-[#A20602]" : "bg-transparent border border-white"}
        hover:bg-[#A20602]
      `}
    >
      {label}
    </div>
  );
};

interface TabGroupProps {
  tabs: string[];
  defaultActive?: number;
  onTabChange?: (index: number) => void;
}

export const TabGroup: FC<TabGroupProps> = ({
  tabs,
  defaultActive = 0,
  onTabChange,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (onTabChange) onTabChange(index);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab}
          isActive={index === activeIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};
