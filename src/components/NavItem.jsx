import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

export default function NavItem({ link, mobile = false }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <li className="relative list-none">
      {mobile ? (
        <div>
          <div
            onClick={toggle}
            className="flex justify-between items-center py-3 cursor-pointer font-semibold"
          >
            {link.title}
            <span className="text-xl">
              {open ? <HiChevronUp /> : <HiChevronDown />}
            </span>
          </div>
          {open && (
            <Dropdown
              items={link.items}
              description={link.description}
              button={link.button}
              mobile
            />
          )}
        </div>
      ) : (
        <div
          className="group inline-block"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="py-4 px-2 hover:text-purple-600 font-medium flex items-center gap-1">
            {link.title}
            <span className="text-lg">
              {open ? <HiChevronUp /> : <HiChevronDown />}
            </span>
          </button>
          {open && (
            <div className="absolute left-0 top-full z-50 bg-white shadow-xl mt-2 rounded-lg w-[700px] p-6">
              <Dropdown
                items={link.items}
                description={link.description}
                button={link.button}
              />
            </div>
          )}
        </div>
      )}
    </li>
  );
}
