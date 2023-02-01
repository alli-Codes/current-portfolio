import React, { useEffect, useState } from "react";

import { NavBar, Footer, Header, DomHead } from "..";
import Modal from "../Projects/modal";
import { ResponsiveNavbar } from "../Navbar";

function Layout(props) {
  let { overLayState, children, changeState } = props;
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  return (
    <div className={` dark `}>
      <Modal overLayState={overLayState} changeState={changeState} />
      <div className="dark:bg-dark-100">
        <DomHead />
        <NavBar />
        <Header></Header>
        {children}
        {windowWidth <= 700 && <ResponsiveNavbar />}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Layout;
