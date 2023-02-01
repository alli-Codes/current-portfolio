import { projects } from "../../data/projects.json";
import { useEffect } from "react";

function Modal(props) {
  const project = projects[0];
  const { overLayState, changeState } = props;
  useEffect(() => {
    const body = document.querySelector("body");
  });
  return (
    <>
      <div
        className={`overlay h-full w-full bg-[#00f97c14] flex justify-center items-center fixed z-[10000] ${overLayState}`}
      >
        <div className="relative h-[80vh] w-[80%] max-w-[60rem]  ">
          <div className="modal bg-white-100 w-full h-full  flex rounded-lg overflow-hidden relative">
            <section className="image__section flex-1 flex items-center bg-black">
              {/* <div> */}
              <img
                src="/images/projects/newshomepage.jpeg"
                className="object-cover"
              />
              {/* </div> */}
            </section>
            <section className="description__section w-[20rem] py-10 px-5 flex flex-col gap-y-10 ">
              <h1 className="text-4xl text-green-500 font-bold">
                {project.title}
              </h1>
              <p>{project.description}</p>
            </section>
          </div>
          <button
            onClick={changeState}
            className="absolute bg-white-100 text-blue-400 w-[2rem] h-[2rem] flex items-center justify-center font-bold text-sm rounded-full right-[-3rem] top-0"
          >
            X
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
