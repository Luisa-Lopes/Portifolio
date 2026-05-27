const highlights = [
  "Engenharia de Redes - UnB",
  "Front-end com React e TypeScript",
  "IoT, Arduino e Bluetooth",
  "Redes",
];

const Home = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Engenharia de Redes | Front-End </p>
        <h1>Construo interfaces de software.</h1>
        <p className="hero-text">
          Sou estudante de Engenharia de Redes na UnB, com experiência em
          projetos de tecnologia, com React Js, .Net, Tailwind, BootStrap e
          desenvolvimento de aplicações com propósito social e técnico.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#projetos">
            Ver projetos
          </a>
          <a href="#contato">Entrar em contato</a>
        </div>
        <div className="quick-links" aria-label="Links importantes">
          <a
            href="https://www.linkedin.com/in/ana-luisa-lopes/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Luisa-Lopes"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:aninhaslopess@gmail.com">Email</a>
        </div>
      </div>
      <aside className="hero-panel" aria-label="Resumo de tecnologias">
        <div className="status-card">
          <span>Stack principal</span>
          <strong>React Js + TypeScript</strong>
          <p>Interfaces responsivas, componentes e integração com dados.</p>
        </div>
        <div className="signal-card">
          {highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default Home;
