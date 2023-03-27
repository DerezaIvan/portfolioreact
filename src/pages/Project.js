import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/btnGitHub";
import {projects} from "../helpers/projectsList";

const Project = () => {
    const {id} = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <img src={project.img} alt={project.title} className="project-details__cover"/>
                    <div className="project-detail__desc">
                        <p>Навыки: {project.skills}</p>
                    </div>

                    {project.gitHubLink && (
                        <BtnGitHub link={project.gitHubLink}/>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Project;