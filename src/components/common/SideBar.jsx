import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { authMenuItems, menuItems } from "../../utils/constants";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`bg-[#2B2E36] ${
          isSidebarOpen ? "w-[324px]" : "w-0"
        } fixed inset-y-0 left-0 overflow-x-hidden transition-all duration-300 ease-in-out top-[92px] lg:w-[324px]`}
      >
        <div className="flex justify-between items-center py-4 pl-6 pr-4">
          <div className="text-base font-semibold text-red-500">Menu</div>
          <button
            onClick={toggleSidebar}
            className="text-3xl font-bold focus:outline-none"
          >
            {isSidebarOpen ? "✕" : "☰"}
          </button>
        </div>
        <ul className="pt-4 pl-6 space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`py-2 me-2 ${
                location.pathname === item.link
                  ? "bg-[#1d1f23] border-l-2 border-l-red-500 transition-colors duration-500"
                  : ""
              }`}
            >
              <NavLink
                to={item.link}
                className="flex items-center text-white text-lg font-semibold space-x-2 hover:text-red-500 transition-colors duration-500"
                activeClassName="text-red-500"
              >
                <span className="mx-2">{item.icon}</span>
                <span
                  className={` text-base ${
                    location.pathname === item.link
                      ? "text-red-500"
                      : "text-[#B0CAD1]"
                  }`}
                >
                  {item.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="py-4  mt-4 pl-6 pr-4text-base font-semibold text-red-500">
          Authentication pages
        </div>
        <ul className="pt-4 pl-6 space-y-4">
          {authMenuItems.map((item) => (
            <li
              key={item.id}
              className={`py-2 me-2 ${
                location.pathname === item.link
                  ? "bg-[#1d1f23] border-l-2 border-l-red-500 transition-colors duration-500"
                  : ""
              }`}
            >
              <NavLink
                to={item.link}
                className="flex items-center text-white text-lg font-semibold space-x-2 hover:text-red-500 transition-colors duration-500"
                activeClassName="text-red-500"
              >
                <span className="mx-2">{item.icon}</span>
                <span
                  className={` text-base ${
                    location.pathname === item.link
                      ? "text-red-500"
                      : "text-[#B0CAD1]"
                  }`}
                >
                  {item.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay for medium screens */}
      <div
        onClick={toggleSidebar}
        className={`lg:hidden fixed inset-0 z-10 bg-green opacity-50 transition-opacity duration-300 ease-in-out ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default Sidebar;
