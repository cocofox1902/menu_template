import React, { useState, useEffect } from "react";
import menuData from '../menu.json';

function Navbar() {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const sections = categories.map((category) => document.getElementById(category));
    const sectionInView = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
    });

    if (sectionInView) {
      setActiveCategory(sectionInView.id);
    }
  };

  return (
    <nav className="bg-white p-4 text-center top-0 z-50 sticky">
      <ul className="flex justify-center space-x-4">
        {categories.map((category, index) => (
          <li key={index}>
            <a
              href={`#${category}`}
              className={`transition-all duration-200 p-1 text-[3rem] ${
                activeCategory === category ? 'opacity-100' : 'opacity-50'
              }`}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
