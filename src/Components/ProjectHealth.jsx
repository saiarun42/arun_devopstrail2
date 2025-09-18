import Bubble from "./Bubble";
import "./ProjectHealth.css";

function ProjectHealth() {
  return (
    <section className="project-health">
      <div className="section-header">
        <h2>PROJECT HEALTH</h2>
        <select>
          <option>Last 30 days</option>
        </select>
      </div>

      <div className="matrix">
        <h3>Strategic Value vs Risk Matrix</h3>
        <div className="axis vertical"></div>
        <div className="axis horizontal"></div>

        <span className="label top-left">High Value, Low Risk</span>
        <span className="label top-right">High Value, High Risk</span>
        <span className="label bottom-left">Low Value, Low Risk</span>
        <span className="label bottom-right">Low Value, High Risk</span>

        <Bubble label="DT" color="green" style={{ top: "35%", left: "35%" }} />
        <Bubble label="MA" color="orange" style={{ top: "48%", left: "48%" }} />
        <Bubble label="WR" color="teal" style={{ bottom: "30%", left: "30%" }} />
        <Bubble label="LS" color="red" style={{ bottom: "30%", right: "30%" }} />
        <Bubble label="CM" color="purple" style={{ top: "30%", right: "35%" }} />
        <Bubble label="AI" color="purple" style={{ top: "40%", right: "30%" }} />
      </div>
    </section>
  );
}

export default ProjectHealth;
