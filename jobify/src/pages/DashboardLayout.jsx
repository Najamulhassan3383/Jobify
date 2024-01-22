import { BigSideBar, Navbar, SmallSideBar } from "@/components/index.js";
import Wrapper from "../assets/wrappers/Dashboard.js";
import { Outlet } from "react-router-dom";
import { useState, useContext, createContext } from "react";

const DashboardContext = createContext();

function DashboardLayout() {
  const user = {
    name: "John Doe",
  };
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toogleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSideBar,
        toggleSideBar,
        isDarkTheme,
        toogleDarkTheme,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSideBar />
          <BigSideBar />

          <div>
            <Navbar />
            <div className="dashboard-content">
              Dashboard content
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
}
export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
export default DashboardLayout;
