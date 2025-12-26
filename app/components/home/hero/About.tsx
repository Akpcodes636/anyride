"use client";
import Image from "next/image";
import Button from "../../ui/Button";
import SubTitle from "../../ui/Subtitle";
import { GuideContents } from "@/app/utils/Content";

const Guides = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-[2fr_1fr] h-full gap-16">
        <div className="h-full w-full flex items-center justify-center md:items-start md:justify-start flex-col py-6 md:py-16.5">
          <div className="mb-6">
            <SubTitle text="Guides" css="rounded-[40px] font-bold" />
          </div>
          <h2>How Anyride works</h2>
          <p className="text-center md:text-start text-[16px] font-normal text-gray-400 mb-10">
            AnyRide keeps your movement simple — from daily commutes to weekend
            hangouts. Just open the app, request a ride, and you&apos;re on your
            way.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button style="primary" css="w-[104px] h-[60px]" type="button">
              Rider
            </Button>
            <Button style="danger" css="w-[104px] h-[60px]" type="button">
              Driver
            </Button>
          </div>

          <div>
            <div className="w-full md:max-w-full lg:max-w-full xl:max-w-full  rounded-lg mt-8 md:mt-8.75 lg:mt-10 xl:mt-10">
              <div className="">
                {GuideContents.map((l, i) => (
                  <div key={i} className={`${l.color} p-6 md:p-15 rounded-lg mb-4`}>
                    <h3 className="text-[28px] md:text-[35px] lg:text-[40px] font-semibold text-[#010418] mb-3.75 leading-[120%]">
                      {l.title}
                    </h3>
                    <p className="text-[14px] md:text-[16px] text-[#333333] leading-[153%] tracking-[-2%]">{l.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full hidden md:hidden lg:hidden xl:block">
          <Image
            src="/images/About-img.png"
            width={500}
            height={500}
            alt="image of a road"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Guides;
