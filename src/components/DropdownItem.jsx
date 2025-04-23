// components/DropdownItem.jsx
import React from 'react';

export default function DropdownItem({ item }) {
  return (
    <div className="flex max-w-sm items-start gap-3 border p-3 rounded-lg shadow-md hover:shadow-md hover:border-purple-400 transition duration-200 ease-in-out md:flex-col md:items-center md:gap-2 md:w-[300px]">
      <img src={item.img} alt={item.title} className="w-24 h-24 object-cover rounded-md md:w-[200px] md:h-[250px] " loading="lazy"  />
      <div>
        <h4 className="font-semibold text-sm">{item.title}</h4>
        <p className="text-md text-gray-600">{item.desc}</p>
      </div>
    </div>
  );
}
