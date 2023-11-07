import React from "react";
import menuData from "../menu.json";

function Menu() {
  return (
    <div className="bg-white px-10">
      {Object.keys(menuData).map((category, index) => (
        <section key={index} id={category} className="pt-20 relative">
          <div className="flex items-center">
            <h2 className="text-[5rem] font-semibold mb-6 mr-4">{category}</h2>
            <div className="h-1 bg-black w-full" />
          </div>

          {menuData[category].map((item, itemIndex) => (
            <div key={itemIndex} className="mb-4 flex justify-between">
              <div className="w-[80%]">
                <h3 className="text-[2.8rem] font-bold text-gray-800 mb-4">
                  {item.Titre}
                </h3>
                <p className="opacity-75 text-[2rem]">{item.Description}</p>
              </div>
              <p className="font-semibold text-[2.5rem]">{item.Prix} €</p>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export default Menu;
