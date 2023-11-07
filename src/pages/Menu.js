import React from "react";
import menuData from "../menu.json";

function Menu() {
  return (
    <div className="bg-white px-4">
      {Object.keys(menuData).map((category, index) => (
        <section key={index} id={category} className="pt-20">
          <h2 className="text-[5rem] font-semibold mb-6">{category}</h2>
          {menuData[category].map((item, itemIndex) => (
            <div key={itemIndex} className="mb-4 flex justify-between">
              <div className="w-[80%]">
                <h3 className="text-[2.5rem] font-semibold text-gray-800 mb-4">
                  {item.Titre}
                </h3>
                <p className="opacity-75 text-[2rem]">{item.Description}</p>
              </div>
              <p className="text-green-600 font-bold text-[2.5rem]">{item.Prix} €</p>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export default Menu;
