import type { Project } from "./Project";
import ProjectMedia from "./ProjectMedia";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <article className="project-card">
      <ProjectMedia media={project.media} area={project.area} index={index} />
      <div className="project-content">
        <div>
          <p className="eyebrow">{project.area}</p>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <dl>
          <div>
            <dt>Desafio</dt>
            <dd>{project.challenge}</dd>
          </div>
          <div>
            <dt>O que desenvolvi</dt>
            <dd>{project.built}</dd>
          </div>
        </dl>
        <div className="tags">
          {project.techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="card-actions">
          <a href={project.github}>GitHub</a>
          <a href={project.demo}>Demo</a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
