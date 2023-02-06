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
        className={`overlay h-full w-full bg-[#00f97c14] px-5 flex justify-center items-center fixed z-[10000] ${overLayState}`}
      >
        <div className="relative md:h-[80vh] w-full md:w-[80%] md:max-w-[70vw]  ">
          <div className="modal bg-white-100 w-full h-full  flex flex-col md:flex-row rounded-lg overflow-hidden relative">
            <section className="bg-black max-w-[40rem] image__section flex items-center">
              <Swiper
                className=" h-full"
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
              >
                {project.image_url.map((image_url) => {
                  return (
                    // <>
                    <SwiperSlide className="!h-full !flex items-center">
                      <section className="w-full ">
                        {/* <div> */}
                        <img
                          src={`/images/projects/${image_url}`}
                          className="!h-full !w-full object-cover"
                        />
                        {/* </div> */}
                      </section>
                    </SwiperSlide>
                    // </>
                  );
                })}
              </Swiper>
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
