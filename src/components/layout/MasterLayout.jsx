import React from "react";
import TopBar from "../common/TopBar";
import Sidebar from "../common/SideBar";

const MasterLayout = () => {
  return (
    <>
      <div className="lg:w-324 min-h-screen bg-[#1D1F23] text-white">
        <TopBar />
        <Sidebar />
      </div>
    </>
  );
};

export default MasterLayout;
