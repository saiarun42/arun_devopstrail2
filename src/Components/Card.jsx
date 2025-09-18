import "./Card.css";

function Card({ title, value, sub, positive, negative, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="value">{value}</p>
      <p className={`sub ${positive ? "positive" : ""} ${negative ? "negative" : ""}`}>
        {sub}
      </p>
      {children}
    </div>
  );
}

export default Card;
