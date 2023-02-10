import React, { useEffect, useState } from "react";

import { NavBar, Footer, Header, DomHead } from "..";
import Modal from "../Projects/modal";
import Sidebar from "../Navbar/Sidebar";
import { ResponsiveNavbar } from "../Navbar";

function Layout(props) {
  let { overLayState, children, changeState, index } = props;
  let [show, toggleSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isDark, changeMode] = useState(true);

  const changeTheme = function () {
    changeMode(!isDark);
  };

  return (
    <div className={` ${isDark ? "dark" : ""} `}>
      <Modal
        overLayState={overLayState}
        changeState={changeState}
        index={index}
      />
      <div className="dark:bg-dark-100">
        <DomHead />
        <Sidebar show={show} toggleSidebar={toggleSidebar} />
        <NavBar
          isDark={isDark}
          changeTheme={changeTheme}
          show={show}
          toggleSidebar={toggleSidebar}
        />
        <Header></Header>
        {children}
        {windowWidth <= 700 && <ResponsiveNavbar />}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Layout;
