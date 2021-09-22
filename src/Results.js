import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        {props.results.meanings.map(function (meaning, index) {
          return (
            <span key={index}>
              <h2>{props.results.word}</h2>
              <h3>{meaning.partOfSpeech}</h3>
              <Phonetics phonetics={props.results.phonetics} />
              <Meaning meaning={meaning} />
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
