import { FaGamepad } from "react-icons/fa";
import { images } from "../assets/ImageData.js";
import StickyMobileButton from "./StickyMobileButton.jsx"; 

const deviceOptions = [
  { name: "Phone", image: images.device1 },
  { name: "Tablet", image: images.device2 },
  { name: "Computer", image: images.device3 },
  { name: "Gaming console", image: images.device4 },
  { name: "Wearables", image: images.device5 },
  { name: "Appliance", image: images.device6 },
  { name: "Television", image: images.device7 },
  { name: "Something Else", image: images.device8 },
];

const DeviceSelector = ({ isOpen, toggleDropdown, closeDropdown }) => {
  return (
    <section className="">
      <div className="">
    
        <div className="hidden md:block z-30 -translate-y-[298px] -translate-x-96">
          <button
            className="flex items-center justify-between bg-white text-black py-3 px-6 rounded-full shadow-md w-full max-w-md mx-auto focus:outline-none"
            onClick={toggleDropdown}
          >
            <FaGamepad fontSize={40} />
            <div className="flex items-center justify-between w-full ml-4">
              <div className="flex flex-col">
                <p className="text-[11px] font-medium opacity-40">
                  What needs help
                </p>
                <p className="text-[13px] font-semibold">Phones, etc.</p>
              </div>
              <p className="border-l border-gray h-10 mx-4"></p>
              <div className="flex flex-col">
                <p className="text-[11px] font-medium opacity-40">
                  How can we help
                </p>
                <p className="text-[13px] font-semibold">Repair, etc.</p>
              </div>
            </div>
            <span className="ml-4 text-xl">{isOpen ? "▲" : "🔍"}</span>
          </button>
        </div>

    
        {isOpen && (
          <>
            <div className="fixed inset-x-0 bottom-0 z-50 bg-white border-t border-gray-300 rounded-t-lg shadow-lg md:hidden transition-transform duration-300">
              <button
                className="absolute top-4 right-4 text-black text-2xl focus:outline-none"
                onClick={closeDropdown}
              >
                ✖
              </button>
              <p className="text-center font-semibold py-4">
                Select a device type we can help fix
              </p>
              <div className="grid grid-cols-2 gap-4 p-4">
                {deviceOptions.map((device, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center cursor-pointer bg-white hover:bg-gray-100 p-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-sm"
                  >
                    <img
                      src={device.image}
                      alt={device.name}
                      className="w-14 h-14"
                      loading="lazy"
                    />
                    <span className="mt-2 text-center text-sm font-medium">
                      {device.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

         
            <div className="absolute top-[80%] left-32 z-30 w-[500px] bg-white rounded-xl border border-gray-200 shadow-xl hidden md:block">
              <p className="text-center font-semibold py-4">
                Select a device type we can help fix
              </p>
              <div className="grid grid-cols-4 gap-4 p-4">
                {deviceOptions.map((device, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center cursor-pointer bg-white hover:bg-gray-100 p-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-sm"
                  >
                    <img
                      src={device.image}
                      alt={device.name}
                      className="w-14 h-14"
                      loading="lazy"
                    />
                    <span className="mt-2 text-center text-sm font-medium">
                      {device.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DeviceSelector;
