"use client";
import HeroSearchDesktop from "./HeroSearchDesktop";
import HeroSearchMobile from "./HeroSearchMobile";


const HeroSearch = () => {
  return (
    // <div className="w-full max-w-174 mx-auto">
    //   {/* Search Container */}
    //   <div
    //     className="
    //       flex flex-col gap-3
    //       bg-white rounded-[50px] p-2
    //       lg:flex-row lg:items-center lg:gap-0
    //     "
    //   >
    //     {/* Input */}
    //     <input
    //       type="search"
    //       placeholder="Enter your pickup location"
    //       className="
    //         flex-1 h-14
    //         px-6
    //         outline-none
    //         text-sm
    //         rounded-[50px]
    //       "
    //     />

    //     {/* Button */}
    //     <Button
    //       style="danger"
    //       type="button"
    //       css="
    //         h-[56px]
    //         px-8
    //         rounded-[50px]
    //         whitespace-nowrap
    //       "
    //     >
    //       Check Availability
    //     </Button>
    //   </div>

    //   {/* Availability text */}
    //   <p className="mt-2 text-center text-sm text-white/80">
    //     Rides available in your area
    //   </p>
    // </div>
    <div>
      <div className="block md:hidden lg:hidden">
        <HeroSearchMobile />
      </div>

      <div className="hidden md:block lg:block">
        <HeroSearchDesktop />
      </div>
    </div>
  );
};

export default HeroSearch;
