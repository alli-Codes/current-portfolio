import React, { useEffect, useState } from "react";

import { NavBar, Footer, Header, DomHead } from "..";
import Modal from "../Projects/modal";
import { ResponsiveNavbar } from "../Navbar";

function Layout({ children }) {
  let [modalState, updateState] = useState(true);
  let [overLayState, updateOverLayState] = useState("");
  const changeState = () => {
    updateState(false);
    updateOverLayState(!modalState ? "hidden" : "");
    console.log("Hello", modalState, overLayState);
  };
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  return (
    <div className={`w-screen dark `}>
      <Modal overLayState={overLayState} changeState={changeState} />
      <div className="dark:bg-dark-100 px-8">
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
