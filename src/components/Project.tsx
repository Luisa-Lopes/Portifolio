import ProjectCard from "./ProjectCard";

const prototipoAutoescola = new URL("../assets/prototipo.png", import.meta.url)
  .href;

const topologiaRedes = new URL("../assets/topologiaPnet.png", import.meta.url)
  .href;

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
  caption?: string;
};

export type Project = {
  name: string;
  area: string;
  description: string;
  challenge: string;
  built: string;
  techs: string[];
  demo: string;
  github: string;
  media?: ProjectMedia;
};

const projects: Project[] = [
  {
    name: "App da Prótese Bluetooth",
    area: "Front-End",
    description:
      "Aplicativo para integração de prótese Bluetooth com dois jogos, para que usuários de prótese de braço possam fortalecer a musculatura e restaurar a independência.",
    challenge: "Traduzir as necessidades do usuário para um jogo.",
    built:
      "Desenvolvi telas para o fortalecimento da musculatura dos usuários com prótese e construí a física, colisões, pontuações, interfaces de menu e configurações dos dois jogos.",
    techs: ["React Native", "TypeScript", "CSS", "Bootstrap"],
    demo: "#",
    github: "#",
  },
  {
    name: "Consultoria Autoescola",
    area: "Gestão de Projetos",
    description:
      "Consultoria com reuniões semanais com o cliente, com o objetivo de criar escopo, protótipo de alta e baixa fidelidade e relatórios de viabilidade técnica, funcional e de usabilidade.",
    challenge:
      "Meu principal desafio foi coordenar a equipe e garantir uma boa comunicação entre todos.",
    built:
      "Gerenciei o levantamento de requisitos para um sistema de autoescolas, definindo escopo e funcionalidades.",
    techs: ["Figma"],
    demo: "https://www.figma.com/proto/RwWi8QOQnBhfY2mocUFEhX/autoescola?node-id=1-2&t=nCZYD87plN0ciCmM-1",
    github: "",
    media: {
      type: "image",
      src: prototipoAutoescola,
      alt: "Protótipo Autoescola",
      caption: "Protótipo de alta fidelidade",
    },
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
    media: {
      type: "image",
      src: topologiaRedes,
      poster: "/assets/hero.png",
      alt: "Demonstração do projeto",
      caption: "Topologia",
    },
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
