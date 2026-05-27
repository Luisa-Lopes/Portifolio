import type { Project } from "./Project";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <article className="project-card">
      <div className={`project-visual visual-${index % 4}`} aria-hidden="true">
        <span>{project.area}</span>
        <div className="visual-screen">
          <i />
          <i />
          <i />
        </div>
      </div>
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
