import React, { useState } from "react";
import "./styles.css";
//var name = prompt("Enter your name");
//Welcome <span style={{ color: color }}>{name}</span>
//var color = "blue";
//var likeCounter = 0;
export default function App() {
  const [likeCounter, setlikeCounter] = useState(0);
  function likeclickHandler() {
    var newlikeCounter = likeCounter + 1; //processing
    console.log("clicked " + newlikeCounter + " times");
    setlikeCounter(newlikeCounter);
  }
  return (
    <div className="App">
      <h1> Inside outt</h1>
      <button onClick={likeclickHandler}>click </button>
      {likeCounter}
    </div>
  );
}
