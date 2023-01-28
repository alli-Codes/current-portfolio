import React, { useEffect, useState } from "react";

import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import usersInfo from "../../data/usersInfo.json";
import { socials } from "../../data/socials.json";
// import avatar from "../../public/images/avatar/avatar.png";

function NavBar() {
  return (
    <React.Fragment>
      <div
        className={`navbar w-full mt-4 sticky top-0 bg-[#00000015] backdrop-blur-sm z-[1000] flex justify-center py-[20px]`}
      >
        <div className={`w-full max-w-[70rem] flex justify-between`}>
          <div
            className={`left w-auto flex align-start items-start justify-center px-[10px] `}
          >
            <p className={`font-extrabold text-lg`}>Evans</p>
          </div>

          <ul className={`relative self-center ml-[10px] hidden md:flex`}>
            <li
              className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}
            >
              <Link href="/projects">Projects</Link>
            </li>
            <li
              className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}
            >
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <div
            className={`relative px-4 bg-[#0000002b] rounded-full hidden md:flex `}
          >
            <ul className={`flex flex-row gap-3`}>
              {socials["twitter"] !== "" && (
                <a
                  href={socials["twitter"]}
                  target="_blank"
                  className={`flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}
                >
                  <FaTwitter className={``} />
                </a>
              )}

              {socials["github"] !== "" && (
                <a
                  href={socials["github"]}
                  target="_blank"
                  className={`flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}
                >
                  <FaGithub className={``} />
                </a>
              )}

              {socials["email"] !== "" && (
                <a
                  href={`mailto:${socials["email"]}`}
                  className={`flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}
                >
                  <FiMail className={`icon mail`} />
                </a>
              )}
            </ul>
          </div>
          <div className={`absolute top-[15px] right-[25px] md:hidden `}>
            <img
              src="./images/avatar/avatar"
              className={` w-[40px] rounded-[50%] border-[2px] border-solid border-green-100 bg-dark-100 `}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavBar;

export function ResponsiveNavbar({ activePage, pageName = "" }) {
  const [active, setActive] = useState(activePage || "home");

  function handleActive(e) {
    let tgt = e.target.dataset;
    let parent = e.target.parentElement.dataset;

    if (Object.entries(tgt).length === 0) {
      if (Object.entries(parent).length > 0) {
        let { name } = parent;
        setActive(name);
      }
      return;
    }
    let { name } = tgt;
    setActive(name);
  }

  return (
    <div className={`mobileNav`}>
      <div className={`main`}>
        <li
          className={active === "home" ? `active` : `li`}
          data-name="home"
          onClick={handleActive}
        >
          <Link href="/">
            <ion-icon name="home-outline" class={`icon`}></ion-icon>
          </Link>
          <label className={`label`}>Home</label>
        </li>
        <li
          className={active === "projects" ? `active` : `li`}
          data-name="projects"
          onClick={handleActive}
        >
          <Link href="/projects">
            <ion-icon name="cube-outline" class={`icon`}></ion-icon>
          </Link>
          <label className={`label`}>Projects</label>
        </li>
        <li
          className={active === "about" ? `active` : `li`}
          data-name="about"
          onClick={handleActive}
        >
          <Link href="/about">
            <ion-icon name="person-outline" class={`icon`}></ion-icon>
          </Link>
          <label className={`label`}>About</label>
        </li>
        <li
          className={active === "contact" ? `active mr-5` : `li mr-5`}
          data-name="contact"
          onClick={handleActive}
        >
          <Link href={pageName === "" ? "#contact" : "/#contact"}>
            <ion-icon name="mail-outline" class={`icon`}></ion-icon>
          </Link>
          <label className={`label`}>Contact</label>
        </li>
      </div>
    </div>
  );
}
