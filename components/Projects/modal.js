import { projects } from "../../data/projects.json";

function Modal(id) {
  const project = projects[0];
  const trucy = true;
  const state = !trucy ? "hidden" : "";
  return (
    <>
      <div
        className={`overlay h-full w-full bg-red-400 flex justify-center items-center absolute z-[10000] ${state}`}
      >
        <div className="modal bg-white-100 h-[80vh] w-[80%] max-w-[60rem] flex rounded-lg overflow-hidden">
          <section className="image__section flex-1 flex items-center bg-black">
            {/* <div> */}
            <img src="/images/avatar/avatar.jpeg" className="object-cover" />
            {/* </div> */}
          </section>
          <section className="description__section w-[20rem] py-10 px-5 flex flex-col gap-y-10">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </section>
        </div>
        <button className="absolute bg-white-100 text-blue-400 w-[2rem] h-[2rem] flex items-center justify-center font-bold text-sm rounded-full right-36 top-16">
          X
        </button>
      </div>
    </>
  );
}

export default Modal;
