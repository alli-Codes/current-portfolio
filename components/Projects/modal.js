import { projects } from "../../data/projects.json";
import { useEffect } from "react";

function Modal(props) {
  const { overLayState, changeState, index } = props;
  let i = index ?? 0;
  const project = projects[i];
  useEffect(() => {
    const body = document.querySelector("body");
  });
  return (
    <>
      <div
        className={`overlay h-full w-full bg-[#00f97c14] px-5 flex justify-center items-center fixed z-[10000] ${overLayState}`}
      >
        <div className="relative md:h-[70vh] w-full md:w-[80%] md:max-w-[70vw]  ">
          <div className="modal bg-white-100 w-full h-full  flex flex-col md:flex-row rounded-lg overflow-hidden relative">
            <section className="image__section flex-1 flex items-center bg-black">
              {/* <div> */}
              <img
                src={`/images/projects/${project.image_url}`}
                className=" object-cover"
              />
              {/* </div> */}
            </section>
            <section className="description__section md:w-[20rem] py-10 px-5 flex flex-col gap-y-4 mx:gap-y-10 overflow-auto ">
              <h1 className="text-2xl md:text-4xl text-green-800 font-bold">
                {project.title}
              </h1>
              <p className="break-all">{project.description}</p>
            </section>
          </div>
          <button
            onClick={() => {
              changeState();
            }}
            className="absolute bg-white-100  w-[2rem] h-[2rem] flex items-center justify-center font-bold text-sm rounded-full right-3 top-3 md:right-[-3rem] md:top-0"
          >
            X
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
