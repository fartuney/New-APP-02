import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="conatiner">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Fartuney, and is {""}
          <a
            href="https://github.com/fartuney/New-APP-02"
            target="_blank"
            rel="noreferrer"
            title="project on GitHub"
          >
            open-sourced on Github{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
