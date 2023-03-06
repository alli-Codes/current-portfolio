import { projects } from "../../data/projects.json";
import { useEffect } from "react";
import { Icon } from "@iconify/react";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

function Modal(props) {
  const { overLayState, changeState, index } = props;
  let i = index ?? 0;
  const project = projects[i];
  const trimString = (string) => string.slice(8);
  useEffect(() => {
    let body = document.querySelector("body");
  });
  return (
    <>
      <div
        className={`overlay h-full w-full bg-[#00f97c14] flex justify-center md:items-center fixed z-[10000] ${overLayState}`}
      >
        <div className="relative w-full flex items-center justify-center px-5">
          <div className="modal bg-white-100 border border-1 border-black shadow-lg h-[70vh] md:h-[80vh] max-w-[20rem] lg:max-w-[60rem] flex flex-col lg:flex-row rounded-lg overflow-hidden relative">
            <section className="bg-black h-full  w-full   image__section flex items-center overflow-hidden">
              <Swiper
                className="h-full w-full"
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
              >
                {project.image_url.map((image_url) => {
                  return (
                    // <>
                    <SwiperSlide className="!h-full">
                      <section className="w-full h-full flex justify-center items-center ">
                        <img
                          src={`/images/projects/${image_url}`}
                          className="h-[15rem] md:h-full w-full object-contain"
                        />
                      </section>
                    </SwiperSlide>
                    // </>
                  );
                })}
              </Swiper>
            </section>
            <section className="description__section w-full lg:max-w-[20rem]  h-full py-10 px-5 flex flex-col gap-y-4 md:gap-y-3 overflow-y-auto break-words">
              <h1 className="pb-5 text-2xl md:text-3xl text-green-700 font-extrabold">
                {project.title}
              </h1>
              <p className="text-justify ">{project.description}</p>
              <p className="text-green-700 text-xs flex gap-x-2 flex-wrap">
                <a href={project.project_url.hosting}>
                  {trimString(project.project_url.hosting)}
                </a>
                <a href={project.project_url.github}>
                  {trimString(project.project_url.github)}
                </a>
              </p>
            </section>
            <button
              onClick={() => {
                changeState();
              }}
              className="absolute top-2 right-2 z-[1000] bg-dark-100 text-white-100  w-[2rem] h-[2rem] flex items-center justify-center font-bold text-sm rounded-full md:right-3 md:top-3"
            >
              <Icon icon="mdi:close-thick" width={20} color="white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
