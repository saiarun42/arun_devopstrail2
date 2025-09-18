import Card from "./Card";
import "./Overview.css";

function Overview() {
  return (
    <section className="overview">
      <div className="section-header">
        <h2>OVERVIEW</h2>
        <select>
          <option>Last 30 days</option>
        </select>
      </div>

      <div className="cards">
        <Card title="Total Projects" value="42" sub="+3 vs last quarter" />
        <Card title="% Green" value="76%" sub="32 of 42 projects" positive />
        <Card title="Budget Variance" value="-2.4%" sub="$1.2M under budget" negative />
        <Card title="Benefits Delivered" value="$8.7M" sub="YTD, 65% of target" />
        <Card title="Milestones" value="15" sub="Next review in 2 weeks" positive />
        <Card title="Client Fulfillment" value="89%" sub="Last month" positive />
        <Card title="Team Capacity" value="85%" sub="For 8 projects" positive />
        <Card><p className="plus">+</p></Card>
      </div>
    </section>
  );
}

export default Overview;
