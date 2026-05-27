const skills = [
  "React JS",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "Node",
  "Git",
  "Arduino",
  "PostgreSQL",
  "Linux",
];

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div>
        <p className="eyebrow">Skills/Tecnologias</p>
        <h2>Ferramentas que aparecem nos meus estudos, projetos e entregas.</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
