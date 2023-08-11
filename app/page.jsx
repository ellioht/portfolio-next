import ProjectCard from "@/components/ProjectCard";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

import data from "@/data/projects.json";

const Home = () => {
  return (
    <div className="2xl:mx-60 xl:mx-40">
      <div className="h-screen flex items-center">
        <section className="flex-center flex flex-col gap-4">
          <h1 className="text-center">Elliot Hallam</h1>
          <p className="text-center">
            Im an enthusiastic full-stack software developer who thrives on turning ideas into digital reality. My
            coding journey is fueled by a genuine love for experimenting with the latest technologies and uncovering
            fresh discoveries. What truly ignites my drive is the limitless power to bring any idea to life.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              className=""
              href="https://www.linkedin.com/in/elliothallam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={32} />
            </a>
            <a
              className=""
              href="https://github.com/ellioht"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscGithub size={32} />
            </a>
          </div>
        </section>
      </div>
      <div className="mt-10 p-2">
        <h1 className="mx-2 text-2xl text-bold">Projects</h1>
        <div className="mt-5 grid grid-cols-2 gap-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} img={project.image} name={project.title} description={project.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
