import ProjectCard from "./ProjectCard";

export type Project = {
  name: string;
  area: string;
  description: string;
  challenge: string;
  built: string;
  techs: string[];
  demo: string;
  github: string;
};

const projects: Project[] = [
  {
    name: "App da Prótese Bluetooth",
    area: "Front-End",
    description:
      "Aplicativo para integração de prótese bluetooth com dois games para que os usuários(as) de prótese de braço possam fortalecer a musculatura e  restaurar a independência.",
    challenge: "Traduzir as necessidades do usuário para um game.",
    built:
      "Desenvolvi telas para o fortalecimente da musculatura dos usuário com prótese e construção da física, colisões, pontuações, interfaces de menu e configurações dos dois games.",
    techs: ["React Native", "TypeScript", "CSS", "Bootstrap"],
    demo: "#",
    github: "#",
  },
  {
    name: "Consultoria Autoescola",
    area: "Gestão de Projetos",
    description: "",
    challenge: "",
    built: "",
    techs: ["Figma"],
    demo: "#",
    github: "#",
  },
  {
    name: "Kanban",
    area: "Front-End",
    description: "",
    challenge: "",
    built: "",
    techs: [],
    demo: "#",
    github: "#",
  },
  {
    name: "Projetos de Redes",
    area: "Acadêmicos",
    description:
      "Atividades e estudos envolvendo protocolos, infraestrutura, endereçamento, serviços e análise de redes.",
    challenge:
      "Conectar fundamentos teóricos com diagnósticos e configurações aplicáveis em cenários reais.",
    built:
      "Configurei ambientes, analisei tráfego, documentei topologias e explorei serviços de rede.",
    techs: ["Linux", "Redes TCP/IP", "Git", "Shell"],
    demo: "#",
    github: "#",
  },
];

const Project = () => {
  return (
    <section className="section" id="projetos">
      <div className="section-heading">
        <p className="eyebrow">Projetos</p>
        <h2>
          Trabalhos que conectam front-end, IoT, redes e aprendizado acadêmico.
        </h2>
      </div>
      <div className="category-row">
        {["Front-End", "IoT", "Redes", "Acadêmicos"].map((category) => (
          <span key={category}>{category}</span>
        ))}
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Project;
