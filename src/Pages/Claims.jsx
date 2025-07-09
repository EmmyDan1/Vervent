import Navbar from "../components/Navbar";
import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import PhoneCarriers from "../components/PhoneCarriers";

function Claims() {
  const [inputValue, setInputValue] = useState("");
  return (
    <section>
      <div className=" mt-12 mx-auto">
        <div className="flex flex-col items-center justify-center  ">
          <h1 className="text-[35px] leading-tight px-8 md:text-[60px] font-light max-w-5xl  text-center   ">
            Choose the phone carrier or retailer for your plan.
          </h1>
          <p className="tracking-[-1px]  font-light md:text-[26px] p-4 text-center">
            Start, manage, or track your claim anytime.⬇️
          </p>
        </div>

        <div className="relative flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl">
            <input
              type="text"
              id="search"
              placeholder=" "
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="peer w-full px-4 py-4 border border-gray-300 rounded-lg text-sm md:text-base placeholder-transparent focus:border-black focus:shadow-md focus:outline-none"
            />
            <label
              htmlFor="search"
              className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-200 ease-in-out 
                 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm 
                 peer-focus:top-1 peer-focus:text-xs peer-focus:text-black"
            >
              Search
            </label>
          </div>
        </div>
      </div>

  
    </section>
  );
}

export default Claims;
