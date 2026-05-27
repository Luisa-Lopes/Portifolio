import './App.css'

type Project = {
  name: string
  area: string
  description: string
  challenge: string
  built: string
  techs: string[]
  demo: string
  github: string
}

const navItems = [
  ['Home', '#home'],
  ['Sobre', '#sobre'],
  ['Projetos', '#projetos'],
  ['Experiência', '#experiencia'],
  ['Skills', '#skills'],
  ['Contato', '#contato'],
]

const highlights = [
  'Engenharia de Redes - UnB',
  'Front-end com React e TypeScript',
  'IoT, Arduino e Bluetooth',
  'Redes, GNU Radio e sistemas conectados',
]

const projects: Project[] = [
  {
    name: 'Violin Slide',
    area: 'Front-End',
    description:
      'Interface web para apoiar o estudo musical com uma experiência visual clara, responsiva e focada no fluxo do usuário.',
    challenge:
      'Traduzir uma ideia artística em uma aplicação simples de usar, sem perder a precisão das interações.',
    built:
      'Estruturei telas, componentes reutilizáveis e estados de interface para tornar a navegação fluida.',
    techs: ['React', 'TypeScript', 'CSS', 'Vite'],
    demo: '#',
    github: '#',
  },
  {
    name: 'App da Prótese Bluetooth',
    area: 'IoT',
    description:
      'Aplicação para comunicação com uma prótese via Bluetooth, aproximando software, eletrônica e acessibilidade.',
    challenge:
      'Criar uma ponte confiável entre comandos do usuário e resposta de hardware em tempo real.',
    built:
      'Desenvolvi a lógica de conexão, estados de controle e uma interface simples para operação do protótipo.',
    techs: ['Bluetooth', 'React', 'JavaScript', 'Arduino'],
    demo: '#',
    github: '#',
  },
  {
    name: 'Dashboard Inspirado no Estágio',
    area: 'Front-End',
    description:
      'Dashboard analítico inspirado em rotinas de estágio, com indicadores, organização de dados e visão operacional.',
    challenge:
      'Transformar dados e processos em uma leitura rápida para acompanhamento e tomada de decisão.',
    built:
      'Criei cards, tabelas, filtros visuais e componentes para representar status, métricas e prioridades.',
    techs: ['React', 'TypeScript', 'Formik', 'PostgreSQL'],
    demo: '#',
    github: '#',
  },
  {
    name: 'Maquete de Cidade Inteligente',
    area: 'IoT',
    description:
      'Protótipo acadêmico com sensores e automações para simular soluções urbanas conectadas.',
    challenge:
      'Integrar sensores, lógica embarcada e uma narrativa tecnológica compreensível para apresentação.',
    built:
      'Implementei automações com microcontroladores, leitura de sensores e organização do fluxo de demonstração.',
    techs: ['Arduino', 'Sensores', 'C++', 'IoT'],
    demo: '#',
    github: '#',
  },
  {
    name: 'Projetos GNU Radio',
    area: 'Redes',
    description:
      'Experimentos com rádio definido por software para estudar sinais, modulação e comunicação digital.',
    challenge:
      'Compreender o comportamento de sinais em blocos e ajustar parâmetros para simulações coerentes.',
    built:
      'Montei fluxogramas, analisei sinais e documentei resultados em atividades práticas de telecomunicações.',
    techs: ['GNU Radio', 'Python', 'SDR', 'Linux'],
    demo: '#',
    github: '#',
  },
  {
    name: 'Projetos de Redes',
    area: 'Acadêmicos',
    description:
      'Atividades e estudos envolvendo protocolos, infraestrutura, endereçamento, serviços e análise de redes.',
    challenge:
      'Conectar fundamentos teóricos com diagnósticos e configurações aplicáveis em cenários reais.',
    built:
      'Configurei ambientes, analisei tráfego, documentei topologias e explorei serviços de rede.',
    techs: ['Linux', 'Redes TCP/IP', 'Git', 'Shell'],
    demo: '#',
    github: '#',
  },
]

const experiences = [
  {
    role: 'Estágio',
    focus: 'Desenvolvimento, organização de dados e apoio a rotinas técnicas.',
    impact:
      'Atuação em demandas reais, com foco em responsabilidade, comunicação e entrega consistente.',
    techs: ['React', 'TypeScript', 'PostgreSQL', 'Git'],
  },
  {
    role: 'EngNet',
    focus: 'Vivência em empresa júnior, projetos, liderança e colaboração multidisciplinar.',
    impact:
      'Participação em iniciativas com impacto prático, relacionamento com pessoas e visão de produto.',
    techs: ['Gestão', 'Marketing', 'Tecnologia', 'Comunicação'],
  },
  {
    role: 'Trainee e Marketing',
    focus: 'Apoio em estratégia, comunicação, planejamento e execução de ações.',
    impact:
      'Desenvolvimento de repertório em liderança, organização e apresentação de soluções.',
    techs: ['Planejamento', 'Design', 'Conteúdo', 'Métricas'],
  },
]

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Formik',
  'Tailwind',
  'Node',
  'Git',
  'Arduino',
  'GNU Radio',
  'PostgreSQL',
  'Linux',
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Ir para Home">
          <span>Portfolio</span>
        </a>
        <nav aria-label="Navegação principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Engenharia de Redes | Front-End | IoT</p>
            <h1>Construo interfaces e soluções conectadas entre software, redes e hardware.</h1>
            <p className="hero-text">
              Sou estudante de Engenharia de Redes na UnB, com experiência em React,
              projetos de tecnologia, IoT, GNU Radio e desenvolvimento de aplicações
              com propósito social e técnico.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#projetos">
                Ver projetos
              </a>
              <a href="#contato">Entrar em contato</a>
            </div>
            <div className="quick-links" aria-label="Links importantes">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="mailto:seuemail@email.com">Email</a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Resumo de tecnologias">
            <div className="status-card">
              <span>Stack principal</span>
              <strong>React + TypeScript</strong>
              <p>Interfaces responsivas, componentes e integração com dados.</p>
            </div>
            <div className="signal-card">
              {highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </aside>
        </section>

        <section className="section two-columns" id="sobre">
          <div>
            <p className="eyebrow">Sobre</p>
            <h2>Perfil técnico com visão humana, acadêmica e prática.</h2>
          </div>
          <div className="section-text">
            <p>
              Curso Engenharia de Redes na Universidade de Brasília, onde desenvolvo
              uma base forte em comunicação, infraestrutura, sistemas conectados e
              resolução de problemas técnicos.
            </p>
            <p>
              Minha trajetória combina estágio, participação na EngNet, liderança,
              marketing e projetos sociais/tecnológicos. Tenho experiência com React
              e interesse especial por front-end, redes, IoT, acessibilidade, rádio
              definido por software e soluções que aproximam tecnologia de pessoas.
            </p>
          </div>
        </section>

        <section className="section" id="projetos">
          <div className="section-heading">
            <p className="eyebrow">Projetos</p>
            <h2>Trabalhos que conectam front-end, IoT, redes e aprendizado acadêmico.</h2>
          </div>
          <div className="category-row">
            {['Front-End', 'IoT', 'Redes', 'Acadêmicos'].map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="section" id="experiencia">
          <div className="section-heading">
            <p className="eyebrow">Experiência</p>
            <h2>Responsabilidades, impacto e repertório em tecnologia e liderança.</h2>
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

        <section className="section contact-section" id="contato">
          <div>
            <p className="eyebrow">Contato</p>
            <h2>Vamos conversar sobre projetos, estágio, tecnologia ou colaboração.</h2>
            <div className="contact-links">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="mailto:seuemail@email.com">seuemail@email.com</a>
            </div>
          </div>
          <form className="contact-form">
            <label>
              Nome
              <input type="text" name="name" placeholder="Seu nome" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="seu@email.com" />
            </label>
            <label>
              Mensagem
              <textarea name="message" rows={5} placeholder="Escreva sua mensagem" />
            </label>
            <button type="submit">Enviar mensagem</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
