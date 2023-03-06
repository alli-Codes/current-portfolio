export default function Header({ children }) {
  return (
    <header
      className={` md:px-8 p-8 dark:text-white-100 flex justify-center relative`}
    >
      <div
        className={`w-full md:max-w-[70rem]  rounded-xl lg:bg-[#1d1d1d18] relative lg:dark:bg-dark-200 md:h-[70vh] py-8 flex flex-col-reverse md:flex-row justify-center items-center self-center gap-10 `}
      >
        <img
          src="/images/background.png"
          className="h-full w-full object-cover absolute hidden dark:flex"
        />
        <div className={`max-w-[30rem] h-full flex items-center `}>
          <div className={`text-justify flex flex-col gap-y-4`}>
            <h1
              data-aos="fade-right"
              className={`text-[2rem] md:text-[3rem] text-center md:text-left`}
            >
              Hi, I am{" "}
              <span className="font-bold text-[#1ba470] dark:text-green-400">
                Evans
              </span>
            </h1>
            <span data-aos="fade-in" className={`text-sm md:text-[1rem] `}>
              My name is Evans Allison and I am an experienced Frontend
              Developer with 4+ years of experience working with web-based
              technologies. <br />I am open to freelancing, remote jobs, and
              collaboration. You can connect with me with any of my social media
              handles or send me a message directly from this platform.
            </span>
            <a
              href="/about"
              className="self-center md:self-end p-2 bg-[#1ba470] dark:bg-green-700 border border-black !text-white text-xs rounded-full z-10 "
            >
              more about me
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className={` h-auto relative `}>
          <div
            className={`img-cont w-[250px] h-[250px]  flex flex-col items-center justify-center bg-cover bg-center  rounded-full md:rounded `}
          >
            <style jsx>{`
              .img-cont {
                background-image: url("/images/avatar/avatar.jpeg");
              }
            `}</style>
          </div>
        </div>
      </div>
    </header>
  );
}
