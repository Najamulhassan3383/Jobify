import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar.js";
import { useDashboardContext } from "../pages/DashboardLayout.jsx";
function SmallSideBar() {
  const data = useDashboardContext();
  console.log(data);
  return <Wrapper>small side bar</Wrapper>;
}

export default SmallSideBar;
