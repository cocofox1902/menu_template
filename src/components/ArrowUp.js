import React, { useState, useEffect } from "react";

function ArrowUp() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${
        showArrow ? "block" : "hidden"
      } fixed bottom-4 right-4 cursor-pointer z-10 text-white bg-gray-500 opacity-70 pt-10 pb-7 px-16 rounded-full text-[5rem] font-bold hover:opacity-90 transition duration-300 ease-in-out`}
      onClick={scrollToTop}
    >
        ^
    </div>
  );
}

export default ArrowUp;
