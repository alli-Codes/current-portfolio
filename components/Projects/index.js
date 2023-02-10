import { projects } from "../../data/projects.json";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

function Projects(props) {
  const { changeState, overLayState } = props;

  return (
    <div
      className={`w-full h-auto dark:text-white-100 relative p-24 flex flex-col items-center justify-center gap-y-20`}
      id="projects"
    >
      {/* <Modal /> */}
      <div className={`w-full flex flex-row items-center justify-center`}>
        <span
          data-aos="zoom-in"
          className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}
        ></span>
        <p data-aos="fade-up" className={`text-3xl font-bold`}>
          Projects
        </p>
        <span
          data-aos="zoom-in"
          className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}
        ></span>
      </div>

      <div className="project__wrapper max-w-[20rem] flex md:hidden flex-wrap gap-4 justify-center relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          className={`h-full flex justify-center`}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
        >
          {projects.map((item, index) => {
            return (
              <SwiperSlide className="project__item px-4 !flex !justify-center gap-y-2">
                <div className="w-[20rem]">
                  <div className="project__image h-[14rem] relative rounded !overflow-hidden">
                    <img
                      src={`/images/projects/${item.image_url[0]}`}
                      className="h-full object-cover"
                    />
                    <button
                      onClick={() => {
                        changeState(index);
                        // const body = document.querySelector("body");
                        // body.style.overflow = "hidden";
                        // console.log(body);
                      }}
                      className="bg-white-100 text-black absolute bottom-1 right-1 rounded-lg p-2 text-xs !font-bold shadow-3xl"
                    >
                      See more
                    </button>
                  </div>
                  <p className="project__title bg-dark-300 p-3 text-center text-sm font-bold rounded">
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="project__wrapper max-w-[50rem] hidden md:flex flex-wrap gap-4 justify-center relative">
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          className={`h-full flex justify-center`}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
        >
          {projects.map((item, index) => {
            return (
              <SwiperSlide className="project__item px-4 !flex !justify-center gap-y-2">
                <div className="w-[20rem]">
                  <div className="project__image h-[14rem] relative rounded-t !overflow-hidden">
                    <img
                      src={`/images/projects/${item.image_url[0]}`}
                      className="h-full w-full object-cover"
                    />
                    <button
                      onClick={() => {
                        changeState(index);
                        console.log("Hey");
                      }}
                      className="bg-green-400 dark:bg-green-400 text-black absolute bottom-2 right-2 rounded-lg p-2 text-xs !font-bold "
                    >
                      See more
                    </button>
                  </div>
                  <p className="project__title bg-black dark:bg-dark-400 text-white-100 dark:text-white-100 p-3 text-center text-sm font-semibold rounded-b">
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
