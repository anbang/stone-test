import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div id="App">
      <header id="header">
        <div className="container">
          <div className="logo">logo</div>
          <div className="search">search</div>
          <div className="topbar">topbar</div>
        </div>
      </header>
      <div className="container">
        <div id="left-sidebar">left-sidebar</div>
        <div id="content">
          <div id="mainbar">mainbar</div>
          <div id="sidebar"> sidebar</div>
        </div>
      </div>
      <header id="footer">
        <div className="container">Footer</div>
      </header>
    </div>
  );
}

export default App;
