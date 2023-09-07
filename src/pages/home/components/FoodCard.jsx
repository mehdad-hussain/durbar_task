import React from "react";

const FoodCard = ({ foodName, price }) => {
  return (
    <div className="bg-[#2B2E36] px-4 py-[30px] shadow-md flex justify-around items-center">
      {/* Left Side: Food Name */}
      <div className="flex-grow">
        <div className="font-semibold text-lg">{foodName}</div>
      </div>

      {/* Right Side: Price Tag and Pill Button */}
      <div className="flex flex-col items-end">
        <button
          className={`px-2 py-1 w-24 rounded-full text-white ${
            price % 2 === 0 ? "bg-green-500 " : "bg-red-500"
          }`}
        >
          ${price}
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
