"use client";

import Button from "../../ui/Button";

const HeroSearchDesktop = () => {
  return (
    <div className="w-full max-w-174 mx-auto">
      <div className="flex items-center bg-white rounded-full p-2">
        
        {/* Input */}
        <input
          type="search"
          placeholder="Enter your pickup location"
          className="
            flex-1 h-14
            px-6
            outline-none
            text-sm
            bg-transparent
          "
        />

        {/* CTA */}
        <Button
          style="danger"
          type="button"
          css="h-[56px] w-[216px] px-8 rounded-full whitespace-nowrap font-semibold"
        >
          Check Availability
        </Button>
      </div>

      {/* Info text */}
      <div className="max-w-86.75 bg-[#E9F9EE] rounded-[50px] w-full mx-auto mt-4 h-15.25 flex items-center justify-center">
      <p className="text-center text-[18px] text-[#22C553]">
        Rides available in your area
      </p>
      </div>

    </div>
  );
};

export default HeroSearchDesktop;
