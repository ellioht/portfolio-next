import ProjectCard from "@/components/ProjectCard";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

import data from "@/data/projects.json";

const Home = () => {
  return (
    <div className="2xl:mx-60 xl:mx-40">
      <div className="h-screen flex items-center justify-center">
        <section className="flex flex-col gap-4">
          <h1 className="text-center font-bold text-5xl">Elliot Hallam</h1>
          <p className="text-center">
            Software Developer based in Sheffield
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
      <hr />
      <div className="mt-10 p-2">
        <div className="flex items-center justify-center gap-2">
          <h1 className="mx-2 text-2xl text-bold text-center font-semibold">Featured Projects</h1>
          <button className="bg-slate-800 hover:bg-slate-600 rounded-md p-1 px-2 text-gray-200">View More</button>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} img={project.image} name={project.title} description={project.description} code={project.code} demo={project.demo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
