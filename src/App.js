import React from "react";
import Link from "./Link.react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />w
        <p>Learn React</p>
        <Link />
      </header>
    </div>
  );
}

export default App;
