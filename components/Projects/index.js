import { useEffect, useState } from "react";
import Link from "next/link";
import { FaStar, FaArrowRight, FaQuoteRight } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import { projects } from "../../data/projects.json";
import userInfo from "../../data/usersInfo.json";

function Projects() {
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchRepos() {
    let res;
    let url = `https://api.github.com/users/${userInfo.github_username}/repos`;
    if (localStorage.getItem("user_repos") === null) {
      try {
        setLoading(true);
        res = await fetch(url);
        let data = await res.json();
        setLoading(false);
        if (data && data.length > 0) {
          localStorage.setItem("user_repo", JSON.stringify(data));
          setRepo(data);
          return;
        }
        setLoading(false);
        setError(`No github repos found.`);
      } catch (err) {
        console.error(`FAILED: ${err.message}`);
        setLoading(false);
        setError(`Failed fetching repo: ${err.message}`);
      }
    }

    let userReopos = JSON.parse(localStorage.getItem("user_repos"));

    setRepo(userReopos);
  }

  useEffect(() => {
    (async () => {
      await fetchRepos();
    })();
  }, []);

  return (
    <div
      className={`w-full h-auto relative p-24 flex flex-col items-center justify-center gap-y-20`}
    >
      <div className={`w-full flex flex-row items-center justify-center`}>
        <span
          data-aos="zoom-in"
          className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}
        ></span>
        <p data-aos="fade-up" className={`text-white-200 text-3xl font-bold`}>
          Projects
        </p>
        <span
          data-aos="zoom-in"
          className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}
        ></span>
      </div>
      {/* <Link href="/projects">
          <a
            data-aos="zoom-in-up"
            className={`text-center text-green-200 underline absolute top-[50px] text-[14px]`}
          >
            All Projects
          </a>
        </Link> */}

      <div className="project__wrapper flex flex-wrap gap-4 justify-center relative">
        <div className="project__controls w-full flex justify-between px-1 absolute top-0 bottom-0 ">
          <button className="z-10">
            <span className="bg-black h-[2rem] w-[2rem] p-4 flex items-center justify-center !text-bold rounded-full">
              {"<"}
            </span>
          </button>
          <button className="z-10">
            <span className="bg-black h-[2rem] w-[2rem] p-4 flex items-center justify-center !text-bold rounded-full">
              {">"}
            </span>
          </button>
        </div>
        {[1, 2].map((item) => {
          return (
            <div className="project__item w-[20rem] flex flex-col gap-y-2">
              <div className="project__image h-[14rem] relative rounded overflow-hidden">
                <img
                  src="images/avatar/avatar.jpeg"
                  className="h-full object-cover"
                />
                <button className="bg-white-100 text-black absolute bottom-1 right-1 rounded-lg p-2 text-xs !font-bold shadow-3xl">
                  See more
                </button>
              </div>
              <p className="project__title bg-green-300 p-3 text-center text-sm font-bold rounded">
                Git Find
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

function GithubRepo({ repos }) {
  return (
    <>
      {repos.length > 0
        ? repos.slice(0, 3).map((rep, i) => {
            return (
              <div
                data-aos="zoom-in"
                key={i}
                className="relative w-full h-[180px] bg-dark-200 flex flex-col items-start justify-start px-4 py-3 mt-2 rounded-md md:w-[300px] "
              >
                <h2 className="w-full text-[20px] ">{rep.name}</h2>
                <br />
                <p className=" w-full text-[15px] text-white-300 ">
                  {rep.description && rep.description.length > 50
                    ? rep.description.slice(0, 60) + "...."
                    : rep.description}
                </p>
                <br />
                <div className="ratings absolute bottom-4 w-full flex flex-row items-start justify-start">
                  <span className="mr-2 flex flex-row items-start justify-start">
                    <StarRatings title="star" count={rep.stargazers_count} />
                  </span>
                  <span className="mr-2 flex flex-row items-start justify-start">
                    <StarRatings title="fork" count={rep.forks} />
                  </span>
                </div>

                <a
                  href={rep.html_url}
                  target={"_blank"}
                  className="absolute right-3 top-2 flex flex-row items-center"
                >
                  <small className="underline">View</small>
                  <FaArrowRight className="ml-2 text-[12px] " />
                </a>
              </div>
            );
          })
        : "Opps, No Github Repo was found."}
    </>
  );
}

function StarRatings({ count = 1, size = 3, title = "star" }) {
  return (
    <>
      {title === "star" ? (
        Array(3)
          .fill(3)
          .slice(0, 3)
          .map((i) => {
            return (
              <FaStar
                key={i * Math.floor(Math.random() * 1000)}
                className={`text-green-200 text-[${size}px] `}
              />
            );
          })
      ) : (
        <AiFillGithub className={`text-green-200 text-[${size}px] `} />
      )}
      <small className="ml-2 text-white-200 font-extrabold">{count}</small>
      <small className="ml-2 text-white-200">{title}</small>
    </>
  );
}
