const navItems = [
  ["Base", "#home"],
  ["Player", "#sobre"],
  ["Missões", "#projetos"],
  ["Jornada", "#experiencia"],
  ["Inventário", "#skills"],
  ["Portal", "#contato"],
];

type NavBarProps = { gameStarted: boolean; xp: number };

const NavBar = ({ gameStarted, xp }: NavBarProps) => (
  <header className="topbar">
    <a className="brand" href="#home" aria-label="Voltar para a base">
      <span className="brand-mark" aria-hidden="true">A</span>
      <span>
        <small>PORTFÓLIO QUEST</small>
        ANA LUÍSA
      </span>
    </a>
    <nav aria-label="Mapa do portfólio">
      {navItems.map(([label, href]) => (
        <a key={href} href={href}>{label}</a>
      ))}
    </nav>
    <div className="hud" aria-label="Progresso do jogador">
      <span className={gameStarted ? "status online" : "status"}>{gameStarted ? "ONLINE" : "PAUSADO"}</span>
      <div className="xp-meter"><i style={{ width: `${Math.min(xp / 4, 100)}%` }} /></div>
      <b>{xp} XP</b>
    </div>
  </header>
);

export default NavBar;
