import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import NavBar from "./layouts/navBar";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [xp, setXp] = useState(0);

  const startGame = () => {
    setGameStarted(true);
    setXp((current) => Math.max(current, 100));
    window.setTimeout(() => {
      document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <div className="site-shell">
      <NavBar gameStarted={gameStarted} xp={xp} />
      <main>
        <Home gameStarted={gameStarted} onStart={startGame} />
        <About />
        <Project onExplore={() => setXp((current) => Math.max(current, 350))} />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
