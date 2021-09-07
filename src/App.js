import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary />
      <footer className="App-footer">
        <em>
          This project was coded by{" "}
          <a
            href="https://optimistic-hopper-ee95fa.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Honoria Fraszt
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/fhonoria/my-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </em>
      </footer>
    </div>
  );
}

export default App;
