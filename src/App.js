import React, { useState } from "react";
import "./styles.css";
//var name = prompt("Enter your name");
//Welcome <span style={{ color: color }}>{name}</span>
//var color = "blue";
//var likeCounter = 0;
export default function App() {
  const [input, setuserInput] = useState("");
  function inputchangeHandler(event) {
    //console.log(event.target.value);
    setuserInput(event.target.value);
  }
  return (
    <div className="App">
      <h1> Inside outt</h1>
      <input onChange={inputchangeHandler} />
      <div>Welcome {input}</div>
    </div>
  );
}
