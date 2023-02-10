import Link from "next/link";

import tools from "../../data/tools.json";
import usersInfo from "../../data/usersInfo.json";

export default function Intro() {
  const myTools = tools.tools;
  return (
    <div className={`w-full dark:text-white-100 flex justify-center `}>
      <div
        className={`max-w-[70rem] w-full py-4 flex flex-col justify-center items-center gap-4`}
      >
        <h1 data-aos="zoom-in-up" className={`text-lg font-bold`}>
          SOME OF THE TOOLS I USE
        </h1>

        <div className="tools flex flex-wrap justify-center gap-y-10">
          {myTools.map((value) => {
            return (
              <div className="flex flex-col items-center">
                <img src={`/images/tools/${value.image}.png`} />
                <p className="font-semibold text-xs">{value.tool}</p>
              </div>
            );
          })}
        </div>

        {/* <Link href="/about">
            <a
              data-aos="zoom-in-up"
              className={`text-[14px] font-bold text-green-200 underline`}
            >
              Read More
            </a>
          </Link> */}
      </div>
      {/* <div className={styles.companies}>
                <img src="https://avatars.githubusercontent.com/u/104397777?s=200&v=4" className={styles.compImage} alt="" />
                <img src="" className={styles.compImage} alt="" />
            </div>
            <br /> */}
    </div>
  );
}

function IntroCards({ data }) {
  return (
    <>
      {data.length > 0 ? (
        data.map((skill, i) => {
          return (
            <div
              data-aos="zoom-in-up"
              key={i}
              className={`w-full h-[120px] p-[20px] rounded-[5px] bg-dark-200 m-[0px] relative transition-all mt-4 hover:shadow-2xl `}
            >
              <div className={`flex flex-col items-start justify-start`}>
                <p className={`m-0 font-extrabold text-green-100 `}>
                  {skill.name}
                </p>
                <span className={`text-[12px] text-white-300 pt-[10px]  `}>
                  {skill.description}
                </span>
              </div>
              <div className={`absolute bottom-[10px]`}>
                <a
                  className={` text-[14px] text-white-200 font-bold underline `}
                >
                  {skill.projects_completed} Projects
                </a>
              </div>
              <ion-icon
                name="color-wand"
                class={`absolute top-[10px] right-[10px] text-green-400 p-[5px] `}
              ></ion-icon>
            </div>
          );
        })
      ) : (
        <div
          data-aos="zoom-in-up"
          className={`w-full h-[120px] p-[20px] rounded-[5px] bg-dark-200 m-[0px] relative transition-all mt-4 hover:shadow-2xl `}
        >
          <div className={`flex flex-col items-start justify-start`}>
            <p className={`m-0 font-extrabold text-green-100 `}>
              Frontend Development
            </p>
            <span className={`text-[12px] text-white-300 pt-[10px]  `}>
              Development of beautiful and unique user interfaces.
            </span>
          </div>
          <div className={`absolute bottom-[10px]`}>
            <a className={` text-[14px] text-white-200 font-bold underline `}>
              60 Projects
            </a>
          </div>
          <ion-icon
            name="color-wand"
            class={`absolute top-[10px] right-[10px] text-green-400 p-[5px] `}
          ></ion-icon>
        </div>
      )}
    </>
  );
}
