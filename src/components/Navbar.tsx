import { useState } from "react";
import NavItem from "./NavItem";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Dropdown from "./Dropdown";
import { images } from "../assets/ImageData.js";
import Button from "./Button";
import SubHeader from "./DeviceProtection";
import { useLocation, useNavigate } from "react-router-dom";
const navLinks = [
  {
    title: "Claims",
    description: "Broken tech is frustrating. Your claims don’t have to be.",
    items: [
      {
        title: "Start a new claim",
        desc: "Get a repair, replacement, or reimbursement.",
        img: images.Img6,
      },
      {
        title: "Track or manage a claim",
        desc: "Check your claim status.",
        img: images.Img7,
      },
      {
        title: "What to expect",
        desc: "Learn about coverage.",
        img: images.Img8,
      },
    ],
  },
  {
    title: "Get tech support",
    description: "Help for your devices.",
    items: [
      {
        title: "Troubleshoot a device",
        desc: "Step-by-step help guides.",
        img: images.Img4,
      },
      {
        title: "Get a repair",
        desc: "Find a store near you.",
        img: images.Img5,
      },
      {
        title: "Explore a tech support plan",
        desc: "Starting around $15/month.",
        img: images.Img6,
      },
    ],
  },
  {
    title: "Repair a device",
    description: "We fix phones, tablets, and more.",
    items: [
      {
        title: "Schedule a repair",
        desc: "Find a store near you.",
        img: images.Img5,
      },
      {
        title: "Get a screen repair",
        desc: "Get a screen repair or replacement.",
        img: images.Img8,
      },
      {
        title: "Explore a tech support plan",
        desc: "Starting around $15/month.",
        img: images.Img9,
      },
    ],
  },
  {
    title: "Protection plans",
    description: "Peace of mind for your tech.",
    items: [
      {
        title: "View plan options",
        desc: "Select the best plan.",
        img: images.Img6,
      },
      {
        title: "Get a repair",
        desc: "Find a store near you.",
        img: images.Img7,
      },
      {
        title: "Explore a tech support plan",
        desc: "Starting around $15/month.",
        img: images.Img8,
      },
    ],
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClaimClick = () => {
    console.log("Navigating to Claims page...");
    navigate("/Pages/Claims");
  };
  return (
    <div>
      <nav className=" border-b shadow-sm bg-white md:px-10 relative">
        <div className=" justify-between items-center text-sm  p-4">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <div className="flex items-center text-[13px]">
              <div className="flex flex-col">
                <h3 className="font-semibold">Vervent</h3>
                <p className="border-b-2 border-black  text-center"></p>
              </div>
              <p className="ml-4">uBreakIFix</p>
            </div>

            <div className="flex items-center space-x-4 ml-10 text-[13px]">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                <span>Stores</span>
              </div>
              <div className="flex items-center ">
                <FaUser className="mr-1" />
                <span>My Account</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <button className="md:hidden" onClick={() => setMobileOpen(true)}>
              ☰
            </button>
            <button>
              <div className="text-2xl font-bold">Vervent</div>
            </button>
          </div>

          <ul
            className="hidden md:flex gap-6 relative"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navLinks.map((link, index) => (
              <li key={index} className="list-none">
                <button
                  className="py-4 px-2 hover:text-gray-600 font-medium flex flex-col items-center group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  <span className="flex items-center gap-1">
                    {link.title}
                    <span className="text-lg">
                      {hoveredIndex === index ? (
                        <HiChevronUp />
                      ) : (
                        <HiChevronDown />
                      )}
                    </span>
                  </span>
                  <span className="h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full translate-y-4"></span>
                </button>
              </li>
            ))}
            {hoveredIndex !== null && (
              <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 z-50 bg-white shadow-xl rounded-lg w-[1000px] h-[350px] p-6 transition-all duration-300 ease-in-out">
                <Dropdown
                  items={navLinks[hoveredIndex].items}
                  description={navLinks[hoveredIndex].description}
                  button={navLinks[hoveredIndex].button}
                />
              </div>
            )}
          </ul>

          <Button
            className="bg-purple-600 px-8 py-3 font-semibold pointer-cursor text-white"
            onClick={handleClaimClick}
          >
            Claims
          </Button>
        </div>

        {mobileOpen && (
          <div className="fixed top-0 left-0 h-full w-full bg-white z-50 shadow-lg p-4 transition-all duration-300 md:hidden overflow-y-auto">
            <div className="flex justify-between items-center text-sm gap-4">
              <div className="flex items-center justify-between mb-4 md:mb-0">
                <div className="flex items-center text-[13px]">
                  <div className="flex flex-col">
                    <button className="font-semibold">Vervent</button>
                    <p className="border-b-2 border-black text-center"></p>
                  </div>
                  <button className="ml-4">uBreakIFix</button>
                </div>

                <div className="flex items-center space-x-4 ml-10 text-[13px]">
                  <button className="flex items-center">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>Stores</span>
                  </button>
                  <button className="flex items-center">
                    <FaUser className="mr-1" />
                    <span>My Account</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl font-bold">Vervent</div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-lg mt-1"
              >
                ✖
              </button>
            </div>

            <div className="space-y-4">
              {navLinks.map((link, index) => (
                <NavItem key={index} link={link} mobile />
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <button className="flex items-center cursor-pointer">
                <FaMapMarkerAlt className="mr-1" />
                <span>Stores</span>
              </button>
              <button className="flex items-center mb-4 cursor-">
                <FaUser className="mr-1" />
                <span>My Account</span>
              </button>

              <Button
                className="bg-purple-600 text-white py-2 px-6 "
                onClick={handleClaimClick}
              >
                Claims
              </Button>
            </div>
          </div>
        )}
      </nav>
      {location.pathname === "/" && <SubHeader />}
    </div>
  );
}

export default Navbar;
