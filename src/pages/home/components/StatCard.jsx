import React from "react";

const StatCard = ({ number, title, icon, color }) => {
  return (
    <div className="bg-[#2B2E36] px-4 py-[36px] rounded-sm shadow-md">
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
          {/* You can use an icon library or your own custom icons here */}
          <img
            src={icon || "https://img.icons8.com/fluency/48/000000/food.png"}
            alt="title"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="ml-4">
          <div
            className={`text-xl font-extrabold`}
            style={{
              color: color,
            }}
          >
            {number}
          </div>
          <div className="text-white">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
