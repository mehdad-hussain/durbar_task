import React, { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <nav
        className={`h-full bg-[#2B2E36] ${
          isSidebarOpen ? "w-[324px]" : "w-0"
        } fixed inset-y-0 left-0 overflow-x-hidden transition-all duration-300 ease-in-out lg:static lg:w-[324px]`}
      >
        <div className="flex justify-between items-center py-4 pl-6 pr-4">
          <div className="text-2xl font-semibold">Menu</div>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-3xl font-bold focus:outline-none"
          >
            {isSidebarOpen ? "✕" : "☰"}
          </button>
        </div>
        <ul className="pt-4 pl-6 space-y-4">
          <li>
            <a href="#" className="block text-lg">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block text-lg">
              Main Layout
            </a>
          </li>
          <li>
            <a href="#" className="block text-lg">
              Order List
            </a>
          </li>
          <li>
            <a href="#" className="block text-lg">
              Chef Page
            </a>
          </li>
          <li>
            <a href="#" className="block text-lg">
              Customer Reviews
            </a>
          </li>
        </ul>
      </nav>

      {/* Overlay for medium screens */}
      <div
        onClick={toggleSidebar}
        className={`lg:hidden fixed inset-0 z-10 bg-black opacity-50 transition-opacity duration-300 ease-in-out ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default Sidebar;
