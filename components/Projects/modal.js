import { projects } from "../../data/projects.json";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

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
        className={`overlay h-full w-full bg-[#00f97c14] px-5 flex justify-center md:items-center fixed z-[10000] ${overLayState}`}
      >
        <div className="relative flex items-center px-5 ">
          <div className="modal bg-white-100 h-auto md:h-[80vh] flex flex-col lg:flex-row rounded-lg overflow-hidden relative">
            <section className="bg-black h-full  w-full max-w-[15rem] lg:max-w-[40rem] image__section flex items-center overflow-hidden">
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
                          className="h-[15rem] md:h-full w-full object-cover"
                        />
                      </section>
                    </SwiperSlide>
                    // </>
                  );
                })}
              </Swiper>
            </section>
            <section className="description__section max-w-[25rem] h-full py-10 px-5 flex flex-col gap-y-4 md:gap-y-10 overflow-y-auto break-words">
              <h1 className="text-2xl md:text-3xl text-green-800 font-extrabold">
                {project.title}
              </h1>
              <p className="text-justify ">{project.description}</p>
            </section>
            <button
              onClick={() => {
                changeState();
              }}
              className="absolute top-2 right-2 z-[1000] bg-dark-100 text-white-100  w-[2rem] h-[2rem] flex items-center justify-center font-bold text-sm rounded-full md:right-3 md:top-3"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
