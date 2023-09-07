import React, { useState } from "react";

const TopBar = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <div className="bg-[#2B2E36] w-full mb-3 h-20 flex items-center justify-between">
      {/* First Div (Logo and Burger Button) */}

      <div className="flex">
        <div className="flex items-center justify-between h-20 lg:w-[324px] md:border-r md:border-r-slate-400">
          {/* Logo */}
          <div className="flex-shrink-0 ml-4">
            <img
              className="h-10 w-10"
              src="your-logo-image-url.png"
              alt="Logo"
            />
          </div>

          {/* Burger Button (Shown on Medium and Below Screens) */}
          <button className={`ml-4 text-[#B0CAD1] text-2xl mr-4`}>☰</button>
        </div>

        {/* Second Div (Search Input) */}
        <div className=" flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none w-44 sm:w-64 lg:w-[296px] lg:ml-4 ml-2"
          />
        </div>
      </div>

      {/* Third Div (Notification Bell Icon and Profile Icon) */}
      <div className="ml-4 flex items-center mr-8                                   ">
        {/* Notification Bell Icon */}
        <button className="text-white text-2xl mr-8">🔔</button>

        {/* Profile Image Button */}
        <button className="text-white text-2xl">
          <img
            className="h-10 w-10 rounded-full"
            src="your-profile-image-url.png"
            alt="Profile"
          />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
