import React, { useState } from "react";
import VerizonImg from "../assets/images/VerizonImg.svg";
import Cricket from "../assets/images/CricketImg.svg";
import ATnT from "../assets/images/At&tImg.svg";
import Cellular from "../assets/images/CellularImg.svg";
import Amazon from "../assets/images/AmazonImg.svg";
import Samsung from "../assets/images/SamsungImg.svg";
import Button from "./Button";

const PhoneCarriers = () => {
  const [viewAll, setViewAll] = useState(false);

  const carriers = [
    { id: 1, name: "Verizon", logo: VerizonImg },
    { id: 2, name: "Cricket", logo: Cricket },
    { id: 3, name: "AT&T", logo: ATnT },
    { id: 4, name: "US Cellular", logo: Cellular },
    { id: 5, name: "Amazon", logo: Amazon },
    { id: 6, name: "Samsung", logo: Samsung },
    { id: 7, name: "Verizon", logo: VerizonImg },
    { id: 8, name: "Cricket", logo: Cricket },
    { id: 9, name: "AT&T", logo: ATnT },
    { id: 10, name: "US Cellular", logo: Cellular },
  ];

  const mostCommonCarriers = carriers.slice(0, 8);

  const toggleView = () => setViewAll(!viewAll);

  return (
    <section className="md:max-w-[1400px] md:mx-auto px-4 py-12 ">
      <div className="flex items-center justify-center gap-4 mb-6">
        <hr className="flex-1 border-t border-gray-300" />
        <p className="text-sm font-medium text-gray-600">Most common</p>
        <hr className="flex-1 border-t border-gray-300" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {mostCommonCarriers.map((carrier) => (
          <div
            key={carrier.id}
            className="bg-white p-4 shadow-sm rounded-md border flex flex-col items-center"
          >
            <img
              src={carrier.logo}
              alt={carrier.name}
              className="w-auto h-auto object-contain mb-2"
            />
            <span className="text-sm font-medium text-gray-700">
              {carrier.name}
            </span>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <hr className="flex-1 border-t border-gray-300" />
          <p className="text-sm font-medium text-gray-600">ALL</p>
          <hr className="flex-1 border-t border-gray-300" />
        </div>
        <div className={`relative mt-12 transition-all duration-500`}>
          {!viewAll && (
            <div className="absolute inset-0 bg-white backdrop-blur-sm bg-opacity-25 z-10 flex items-end justify-center">
              <Button
                onClick={toggleView}
                className="py-2 px-6 bg-purple-800 border border-purple-700 font-semibold text-white rounded-full hover: transition"
              >
                View All
              </Button>
            </div>
          )}

          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${
              !viewAll ? "opacity-40" : "opacity-100"
            }`}
          >
            {carriers.map((carrier) => (
              <div
                key={carrier.id}
                className="bg-white p-4 shadow-sm rounded-md border flex flex-col items-center"
              >
                <img
                  src={carrier.logo}
                  alt={carrier.name}
                  className="w-auto h-auto object-contain mb-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  {carrier.name}
                </span>
              </div>
            ))}
          </div>

          {viewAll && (
            <div className="text-center mt-6">
              <button
                onClick={toggleView}
                className="py-2 px-6 bg-purple-800 border border-purple-700 font-semibold text-white rounded-full hover: transition"
              >
                View Most Common
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhoneCarriers;
