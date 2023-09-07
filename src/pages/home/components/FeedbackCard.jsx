import React from "react";

const FeedbackCard = ({ imageSrc, name, feedback, time }) => {
  return (
    <div className="bg-[#2B2E36] p-4 rounded-sm shadow-md flex items-center">
      {/* Left Side: Image */}
      <div className="flex-shrink-0 mr-4">
        <img
          src={imageSrc}
          alt={`${name}'s Profile`}
          className="w-12 h-12 rounded-full"
        />
      </div>

      {/* Middle Section: Name and Feedback */}
      <div className="flex-grow">
        <div className="font-semibold text-white">{name}</div>
        <div className="text-[#B0CAD1]">{feedback}</div>
      </div>

      {/* Right Side: Time and Pill Button */}
      <div className="flex flex-col items-end justify-between">
        <button className="bg-[#000000] text-[#B0CAD1] px-1 py-2.5 rounded-full w-36">
          {time}
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
