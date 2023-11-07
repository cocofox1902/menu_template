import React from 'react';
import menuData from '../menu.json';

function Navbar() {
  const categories = Object.keys(menuData);

  return (
    <nav className="bg-white p-4 text-center top-0 z-50 sticky">
      <ul className="flex justify-center space-x-4">
        {categories.map((category, index) => (
          <li key={index}>
            <a href={`#${category}`} className="opacity-50 hover:opacity-100 transition-all duration-200 p-1">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
