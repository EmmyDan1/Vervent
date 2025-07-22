import React, { useState } from "react";
import { images } from "../assets/ImageData.js";

const data = [
  {
    label: "Whole home",
    thumb: images.WashingMacImg,
    image: images.MyImg1,
  },
  {
    label: "Home tech",
    thumb: images.TvImg,
    image: images.MyImg2,
  },
  {
    label: "Appliance",
    thumb: images.ApplianceImg,
    image: images.MyImg3,
  },
  {
    label: "Phone",
    thumb: images.PhoneImg,
    image: images.MyImg4,
  },
];

export default function TechCarePlans() {
  const [selected, setSelected] = useState(2);

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="flex flex-col md:flex-row items-center mx-auto gap-8">
        <div className="flex flex-col w-full md:w-1/2 items-center md:items-start">
          <h2 className="text-[28px] font-semibold mb-4 text-center md:text-left">
            Tech care plans for life’s uh-ohs and what-ifs
          </h2>
          <div className="w-full flex justify-center md:justify-start">
            <img
              src={data[selected].image}
              alt={data[selected].label}
              className="rounded-xl w-full max-w-[400px] md:max-w-[700px] h-auto object-cover transition-all duration-500"
              loading="lazy"
            />
          </div>
        </div>

        <div className="max-w-sm md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex md:justify-start justify-center gap-6 mb-6  md:w-[600px]">
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`flex flex-col items-center md:px-4 md:py-3 border-b-2 transition-all duration-300 ${
                  selected === index
                    ? "border-black font-semibold"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                <img
                  src={item.thumb}
                  alt={item.label}
                  className="w-24 h-14 mb-2 object-contain"
                  loading="lazy"
                />
                <span className="text-base">{item.label}</span>
              </button>
            ))}
          </div>

          <p className="text-gray-700 mb-6 md:w-[600px]">
            Meet all-in-one tech care. Coverage for nearly all your devices and
            appliances, hands-on help tailored to your needs, and more.
          </p>

          <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
            Protect your appliances
          </button>
        </div>
      </div>
    </section>
  );
}
