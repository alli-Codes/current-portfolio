import { Icon } from "@iconify/react";

const Sidebar = function (props) {
  let { show, toggleSidebar } = props;
  return (
    <div
      className={`overlay bg-dark-100 h-[100vh] w-full flex justify-end fixed z-[10000] ${
        show ? "flex" : "hidden"
      }`}
    >
      <button
        className="text-red-400 bg-dark-100 h-[1rem] w-[1rem] p-4 m-4 flex justify-center items-center rounded-full absolute top-0 right-0"
        onClick={() => toggleSidebar(!show)}
      >
        X
      </button>
      <div className="sidebar w-full max-w-[15rem] bg-white-100 py-10 flex flex-col justify-between">
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
