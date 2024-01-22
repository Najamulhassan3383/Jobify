import React from "react";
import Wrapper from "../assets/wrappers/Navbar.js";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo.jsx";
import { useDashboardContext } from "../pages/DashboardLayout.jsx";
import DropDown from "./DropDown.jsx";
function Navbar() {
  const { toggleSideBar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <DropDown />
      </div>
    </Wrapper>
  );
}

export default Navbar;
