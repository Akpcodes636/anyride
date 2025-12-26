"use client";
import React from "react";

interface ButtonProps {
  children: React.ReactNode; // Correct type for children
  type: "button" | "submit" | "reset"; // Can be 'button', 'submit', or 'reset'
  fn?: () => void; // The function to be executed when the button is clicked
  loading?: boolean;
  disabled?: boolean;
  style:
    | "danger"
    | "nobg"
    | "primary"
    | "reverse"
    | "reverseLight"
    | "secondary"
    | "disabled"
    | "tertiary";
  css?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  fn,
  loading,
  disabled,
  style,
  css,
}) => {
  return (
    <button
      onClick={fn}
      disabled={loading || disabled} // Disable the button when loading or manually disabled
      type={type}
      className={`flex h-16 items-center justify-center cursor-pointer whitespace-nowrap rounded-[50px] px-4.5 py-9 text-[16px] font-semibold duration-150 ${css} ${
        style === "danger" && "bg-[#A20602] text-white"
      } ${
        style === "nobg" &&
        "border border-[#A20602] bg-white text-[#A20602] text-[16px] font-semibold tracking-[-2%] leading-[160%]"
      } ${style === "primary" && "bg-[#E6E6EB] border-none"} ${
        style === "secondary" && "bg-fill-blueStrong text-text-strongInverse"
      } ${
        style === "disabled" && "bg-[#0000001A] text-text-strongInverse"
      } ${style === "reverse" && "border-[0.81px] border-stroke-strong bg-fill-weakerInverse hover:bg-[#00000066] hover:shadow-raised"} ${style === "reverseLight" && "border-[0.81px] border-stroke-strong bg-fill-weakerInverse hover:bg-[#51515114] hover:shadow-raised"} ${
        style === "tertiary" && "bg-[#9327DB] text-text-strongInverse"
      }
      `} // Add your button styles here
    >
      {children}
    </button>
  );
};

export default Button;
