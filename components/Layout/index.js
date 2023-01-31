import React, { useEffect, useState } from "react";

import { NavBar, Footer, Header, DomHead } from "..";
import Modal from "../Projects/modal";
import { ResponsiveNavbar } from "../Navbar";

function Layout({ children }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
  // let show = useSatete(f);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  return (
    <div className={`w-screen dark `}>
      <Modal />
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
