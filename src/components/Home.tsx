type HomeProps = { gameStarted: boolean; onStart: () => void };

const Home = ({ gameStarted, onStart }: HomeProps) => (
  <section className="hero-section" id="home">
    <div className="hero-copy">
      <p className="eyebrow">PRESS START · PLAYER 01</p>
      <h1>Olá, eu sou <span>Ana Luísa.</span></h1>
      <p className="hero-text">
        Estudante de Engenharia de Redes na UnB e desenvolvedora front-end.
        Transformo ideias, interfaces e tecnologia em experiências que conectam pessoas.
      </p>
      <div className="hero-actions">
        <button className="primary-action" onClick={onStart}>
          {gameStarted ? "Continuar aventura" : "Iniciar aventura"}
        </button>
        <a href="#projetos">Abrir mapa de missões</a>
      </div>
      <div className="quick-links" aria-label="Links importantes">
        <a href="https://www.linkedin.com/in/ana-luisa-lopes/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/Luisa-Lopes" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:aninhaslopess@gmail.com">E-mail</a>
      </div>
    </div>
    <aside className="hero-panel" aria-label="Ficha da personagem">
      <div className="player-card">
        <div className="avatar" aria-hidden="true"><span>AL</span></div>
        <div><p>PLAYER 01</p><strong>Ana Luísa Lopes</strong><small>Classe: Front-end Explorer</small></div>
      </div>
      <div className="stat-grid">
        <span><b>01</b> nível</span><span><b>04</b> missões</span><span><b>10</b> skills</span>
      </div>
      <div className="quest-log">
        <p>MISSÃO ATIVA</p>
        <strong>Explorar o meu universo tecnológico</strong>
        <span>↓ Use o mapa para desbloquear os capítulos.</span>
      </div>
    </aside>
  </section>
);

export default Home;
