import { useEffect } from "react";
import { Icon } from "@iconify/react";

const Sidebar = function (props) {
  let { show, toggleSidebar } = props;
  useEffect(() => {
    let body = document.querySelector("body");
    // body.style.overflow = show ? "hidden" : "";
  });
  return (
    <div
      className={`overlay bg-[#1d1d1d9c] h-[100vh] w-full flex justify-end fixed z-[10000] ${
        show ? "overlay__show" : "overlay__hide"
      }`}
    >
      <button
        className=" bg-dark-100 p-1 m-4 rounded-full z-[1000] absolute top-0 right-0"
        onClick={() => toggleSidebar(!show)}
      >
        <Icon icon="mdi:close-thick" width={20} color="white" />
      </button>
      <div
        className={`sidebar w-full max-w-[15rem] bg-white-100 py-10 flex flex-col justify-between hidden ${
          show ? "slide__in" : "slide__out"
        }`}
      >
        <div className="links flex flex-col gap-y-2 py-10 px-5">
          <a className="bg-green-400 p-3 rounded-full">About</a>
          <a className="p-3 rounded-full">Projects</a>
          <a className="p-3 rounded-full">Contact</a>
        </div>

        <div
          className={`relative px-4 py-5 w-full  rounded-full self-center flex`}
        >
          <ul
            className={`bg-[#0000002b] w-full px-4 py-3 rounded-full flex flex-row justify-around`}
          >
            <a
              href="#"
              target="_blank"
              className={`flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}
            >
              <Icon icon="line-md:twitter" width="1.5rem" />
            </a>
            <a
              href="#"
              target="_blank"
              className={`flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}
            >
              <Icon icon="line-md:github-loop" width="1.5rem" />
            </a>
            <a
              href="#"
              className={`flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}
            >
              <Icon icon="line-md:linkedin" width="1.5rem" />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
