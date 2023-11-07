import React from "react";
import menuData from "../menu.json";

function Menu() {
  return (
    <div className="bg-white px-4">
      {Object.keys(menuData).map((category, index) => (
        <section key={index} id={category} className="pt-14">
          <h2 className="text-3xl font-semibold mb-6">{category}</h2>
          {menuData[category].map((item, itemIndex) => (
            <div key={itemIndex} className="mb-4 flex justify-between">
              <div className="w-[80%]">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.Titre}
                </h3>
                <p className="text-gray-600">{item.Description}</p>
              </div>
              <p className="text-green-600 font-bold">{item.Prix} €</p>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export default Menu;
