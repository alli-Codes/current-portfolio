import React, { useEffect, useState } from "react";

import Link from "next/link";
import { Icon } from "@iconify/react";
// import { FaGithub, FaTwitter } from "react-icons/fa";
// import { FiMail } from "react-icons/fi";
import usersInfo from "../../data/usersInfo.json";
// import avatar from "../../public/images/avatar/avatar.png";

function NavBar(props) {
  let { show, toggleSidebar } = props;

  useEffect(() => {
    const container = document.querySelector(".theme__container");
    const wrapper = document.querySelector(".theme__wrapper");
    const images = document.querySelectorAll(".theme__img");

    let active = false;
    const changeImageState = function () {
      images.forEach((image) => image.classList.toggle("active_image"));
    };

    container.addEventListener("click", () => {
      active = !active;
      // light.classList.toggle('active')
      changeImageState();
      wrapper.style.left = active ? "1rem" : ".1rem";
      container.style.backgroundColor = active ? "#6200EE" : "";
    });
  });
  return (
    <React.Fragment>
      <div
        className={`navbar w-full dark:text-white-100 sticky bg-[#00000015] backdrop-blur-sm z-[1000] flex justify-center px-5 py-[20px] sticky top-0`}
      >
        <div
          className={`w-full max-w-[70rem] flex justify-between items-center`}
        >
          <p className={`font-extrabold text-lg`}>Evans</p>

          <button
            className="flex md:hidden"
            onClick={() => toggleSidebar(!show)}
          >
            <Icon icon="mdi:menu" width={24} />
          </button>

          <ul className={`hidden md:flex gap-4`}>
            <li
              className={` transition-all hover:text-green-100 cursor-pointer text-[.8rem]`}
            >
              <Link href="/about">About</Link>
            </li>

            <li
              className={` transition-all hover:text-green-100 cursor-pointer text-[.8rem]`}
            >
              <Link href="/project">Projects</Link>
            </li>

            <li
              className={` transition-all hover:text-green-100 cursor-pointer text-[.8rem]`}
            >
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <div className={`relative px-4  rounded-full hidden md:flex gap-14 `}>
            <ul
              className={`bg-[#0000002b] px-3 rounded-full flex flex-row gap-3`}
            >
              <a href="" target="_blank">
                <Icon icon="line-md:twitter" />
              </a>
              <a href="" target="_blank">
                <Icon icon="line-md:github-loop" />
              </a>
              <a href="">
                <Icon icon="line-md:linkedin" />
              </a>
            </ul>
            <div className="">
              <div className="theme__container">
                <div className="theme__wrapper">
                  <img
                    className="theme__img active_image"
                    src="/images/light-moon.png"
                    alt=""
                  />
                  <img
                    className="theme__img"
                    src="/images/dark-moon.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
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

  // return (
  //   <div className={`mobileNav`}>
  //     <div className={`main`}>
  //       <li
  //         className={active === "home" ? `active` : `li`}
  //         data-name="home"
  //         onClick={handleActive}
  //       >
  //         <Link href="/">
  //           <ion-icon name="home-outline" class={`icon`}></ion-icon>
  //         </Link>
  //         <label className={`label`}>Home</label>
  //       </li>
  //       <li
  //         className={active === "projects" ? `active` : `li`}
  //         data-name="projects"
  //         onClick={handleActive}
  //       >
  //         <Link href="/projects">
  //           <ion-icon name="cube-outline" class={`icon`}></ion-icon>
  //         </Link>
  //         <label className={`label`}>Projects</label>
  //       </li>
  //       <li
  //         className={active === "about" ? `active` : `li`}
  //         data-name="about"
  //         onClick={handleActive}
  //       >
  //         <Link href="/about">
  //           <ion-icon name="person-outline" class={`icon`}></ion-icon>
  //         </Link>
  //         <label className={`label`}>About</label>
  //       </li>
  //       <li
  //         className={active === "contact" ? `active mr-5` : `li mr-5`}
  //         data-name="contact"
  //         onClick={handleActive}
  //       >
  //         <Link href={pageName === "" ? "#contact" : "/#contact"}>
  //           <ion-icon name="mail-outline" class={`icon`}></ion-icon>
  //         </Link>
  //         <label className={`label`}>Contact</label>
  //       </li>
  //     </div>
  //   </div>
  // );
}
