import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Executive Overview Dashboard</h1>
      <div className="header-icons">
        <span>🔔</span>
        <span>⚙️</span>
        <div className="avatar">A</div>
      </div>
    </header>
  );
}

export default Header;
