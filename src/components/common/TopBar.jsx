import React, { useState } from "react";

const TopBar = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <div className="bg-[#2B2E36] fixed z-50 w-full mb-3 h-20 flex items-center justify-between">
      {/* First Div (Logo and Burger Button) */}

      <div className="flex">
        <div className="flex items-center justify-between h-20 lg:w-[324px] border-r border-r-slate-400">
          {/* Logo */}
          <div className="flex-shrink-0 ml-4 h-10 md:w-40 w-30">
            <img
              className=" object-contain h-full w-full"
              src="images/Logo.png"
              alt="Logo"
            />
          </div>

          {/* Burger Button (Shown on Medium and Below Screens) */}
          <button className={`ml-4 text-[#B0CAD1] text-2xl mr-4 lg:hidden`}>
            ☰
          </button>
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
      <div className="ml-4 flex items-center min-w-[160px] max-w-max mr-8 justify-between">
        {/* Notification Bell Icon */}
        <button className="text-white sm:text-2xl text-lg">🔔</button>

        {/* Profile Image Button */}
        <button className="text-white text-2xl sm:h-10 sm:w-10 h-6 w-6">
          <img
            className="rounded-full object-cover"
            src="images/customerImage.png"
            alt="Profile"
          />
        </button>
        <div className="flex items-baseline">
          <p>
            <span className="text-white text-sm font-semibold mr-0.5">
              John Doe
            </span>
          </p>
          <img src="images/downArrow.png" className="w-2 h-2" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
