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
        setShowSideBar,
      }}
    >
      <Wrapper>
        <div className="grid grid-cols-1 border-none lg:grid-cols-[auto_1fr] ">
          <div className="">
            {showSideBar ? (
              <>
                <SmallSideBar />
                <BigSideBar />
              </>
            ) : null}
          </div>
          <div className="">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </DashboardContext.Provider>
  );
}
export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
export default DashboardLayout;
