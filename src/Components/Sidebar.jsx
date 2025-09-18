import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <button className="collapse-btn">⮜</button>
      <div className="menu-icons">
        <div>☰</div>
        <div>≡</div>
        <div>◉</div>
      </div>
    </div>
  );
}

export default Sidebar;
