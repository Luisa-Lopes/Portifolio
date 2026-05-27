import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";

const navItems = [
  ["Home", "#home"],
  ["Sobre", "#sobre"],
  ["Projetos", "#projetos"],
  ["Experiência", "#experiencia"],
  ["Skills", "#skills"],
  ["Contato", "#contato"],
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar" style={{ width: "100%", padding: 20 }}>
        <a className="brand" href="#home" aria-label="Ir para Home">
          <span>Portfolio - Ana Luísa</span>
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
        <Home />

        <About />

        <Project />

        <Experience />

        <Skills />

        <Contact />
      </main>
    </div>
  );
}

export default App;
