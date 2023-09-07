import React from "react";
import TopBar from "../common/TopBar";
import Sidebar from "../common/SideBar";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <>
      <div className="h-[100%] relative">
        <TopBar />
        <Sidebar />
        <div className="lg:left-[324px] lg:w-[calc(100vw-324px)] w-full absolute top-[93px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
