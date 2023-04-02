import Project from "../components/project/Project";

import { projects } from "../helpers/projectsList";

const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1 animate__animated animate__slideInDown">
            Проекты
          </h2>
          <ul className="projects animate__animated animate__zoomIn">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.title}
                  img={project.img}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
