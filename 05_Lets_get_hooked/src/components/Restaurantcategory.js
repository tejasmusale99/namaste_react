import { useState } from "react";
import CategoryItems from "./CategoryItems";

const Restaurantcategory = ({ item, showCategoryItems, setIsOpenIndex }) => {

  const handleClick = () => {
    setIsOpenIndex();
  };

  return (
    <div className="border-b">
      <div
        className="w-full flex items-center justify-between px-4 py-5 cursor-pointer"
        onClick={handleClick}   // ✅ MOVE CLICK HERE
      >
        <h2 className="text-lg font-bold text-gray-900">
          {item.card.card.title}
          <span className="font-semibold">
            ({item.card.card.itemCards.length})
          </span>
        </h2>

        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {showCategoryItems && (
        <CategoryItems data={item.card.card.itemCards} />
      )}
    </div>
  );
};


export default Restaurantcategory;
