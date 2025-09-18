import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Overview from "./Components/Overview";
import ProjectHealth from "./Components/ProjectHealth";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">
          <Overview />
          <ProjectHealth />
        </div>
      </div>
    </div>
  );
}

export default App;
