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
        <div className="relative h-full md:h-[80vh] w-full flex items-center max-w-[70vw] lg:max-w-[75rem]  ">
          <div className="modal bg-white-100 w-full h-full max-h-[80vh] flex flex-col lg:flex-row rounded-lg overflow-hidden relative">
            <section className="bg-black max-w-[70vw] lg:max-w-[50rem] image__section flex items-center">
              <Swiper
                className=" h-full w-full max-h-[40vh] lg:max-h-[100vh]"
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
              >
                {project.image_url.map((image_url) => {
                  return (
                    // <>
                    <SwiperSlide className="!h-full !w-full !flex items-center">
                      <section className="w-full h-full">
                        <img
                          src={`/images/projects/${image_url}`}
                          className="h-full !w-full object-cover"
                        />
                      </section>
                    </SwiperSlide>
                    // </>
                  );
                })}
              </Swiper>
            </section>
            <section className="description__section h-full py-10 px-5 flex flex-col gap-y-4 mx:gap-y-10 overflow-y-auto break-words">
              <h1 className="text-3xl md:text-3xl text-green-800 font-bold">
                {project.title}
              </h1>
              <p className="">{project.description}</p>
            </section>
          </div>
          <button
            onClick={() => {
              changeState();
            }}
            className="absolute top-24 right-4 z-[1000] bg-white-100  w-[2rem] h-[2rem] flex items-center justify-center font-bold text-sm rounded-full md:right-3 md:top-3 md:right-[-3rem] md:top-0"
          >
            X
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
