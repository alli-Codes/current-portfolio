import React, { useEffect, useState } from "react";

import { NavBar, Footer, Header, DomHead } from "..";
import { ResponsiveNavbar } from "../Navbar";

function Layout({ children }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  return (
    <div className={`w-screen dark`}>
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
