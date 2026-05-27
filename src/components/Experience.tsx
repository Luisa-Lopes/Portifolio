const experiences = [
  {
    role: "Estágio",
    focus: "Desenvolvimento, organização de dados e apoio a rotinas técnicas.",
    impact:
      "Atuação em demandas reais, com foco em responsabilidade, comunicação e entrega consistente.",
    techs: ["React", "TypeScript", "PostgreSQL", "Git", "Azure"],
  },
  {
    role: "EngNet",
    focus:
      "Vivência em empresa júnior, projetos, liderança e colaboração multidisciplinar.",
    impact:
      "Participação em iniciativas com impacto prático, relacionamento com pessoas e visão de produto.",
    techs: ["Gestão", "Marketing", "Tecnologia", "Comunicação"],
  },
];

const Experience = () => {
  return (
    <section className="section" id="experiencia">
      <div className="section-heading">
        <p className="eyebrow">Experiência</p>
        <h2>
          Responsabilidades, impacto e repertório em tecnologia e liderança.
        </h2>
      </div>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.role}>
            <h3>{experience.role}</h3>
            <p>{experience.focus}</p>
            <strong>{experience.impact}</strong>
            <div className="tags">
              {experience.techs.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
