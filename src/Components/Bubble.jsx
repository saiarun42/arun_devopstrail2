import "./Bubble.css";

function Bubble({ label, color, style }) {
  return (
    <div className={`bubble ${color}`} style={style}>
      {label}
    </div>
  );
}

export default Bubble;
