import React, { useState } from "react";
import Navlinks from "./Navlinks.jsx";
import Logo from "./Logo.jsx";
import { useDashboardContext } from "../pages/DashboardLayout.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

function SmallSideBar() {
  const { showSideBar, setShowSideBar } = useDashboardContext();

  const toggleOverlay = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      {/* Menu icon to toggle the overlay */}

      {/* Overlay */}
      {showSideBar && (
        <div className="fixed  inset-0 bg-white lg:hidden">
          <div className=" mt-6 w-80 p-4 m-auto flex flex-col justify-center items-center">
            {/* Close icon to close the overlay */}
            <FaTimes
              onClick={toggleOverlay}
              className="cursor-pointer absolute top-4 left-4 text-red"
            />
            <Logo />
            <Navlinks />
          </div>
        </div>
      )}
    </>
  );
}

export default SmallSideBar;
