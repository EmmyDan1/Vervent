
import React from 'react';
import DropdownItem from './DropdownItem';

export default function Dropdown({ items, description, button, mobile = false }) {
  return (
    <div className={`${mobile ? 'mt-2' : ''}`}>
      {!mobile && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Claims</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <a href="#" className="text-purple-600 text-sm">{button} →</a>
        </div>
      )}

      <div className={`grid ${mobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4`}>
        {items.map((item, index) => (
          <DropdownItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
