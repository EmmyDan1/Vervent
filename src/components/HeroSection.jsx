import React from "react";
import HeroImage from "../assets/images/HeroImg.jpg";
import DeviceSelector from "./DeviceSelector";

function HeroSection() {
  return (
    <div className="w-full ">
      <div className="relative w-full h-[300px] sm:h-[300px] md:h-[500px] lg:h-[580px] md:mt-8 md:max-w-[1350px] mx-auto overflow-hidden md:rounded-[35px]">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/100"></div>

        <div className="absolute inset-0 flex flex-col mt-24 justify-center items-start px-4 md:left-10 md:mt-0 text-white md:-translate-y-12">
          <h2 className="text-[28px] sm:text-4xl md:text-[53px] font-bold ">
            Handled With Care
          </h2>
          <p className="text-[15px] sm:text-base md:text-lg">
            Easy claims. Quality fixes. Tech help that’s actually helpful.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
