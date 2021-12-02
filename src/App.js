import "./styles.css";
var name = prompt("Enter your name");
var color = "blue";

export default function App() {
  return (
    <div className="App">
      <h1>
        Welcome <span style={{ color: color }}>{name}</span>
      </h1>
    </div>
  );
}
