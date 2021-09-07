import React from "react";

export default function Results(props) {
  if (props.results) {
    console.log(props.results);
    console.log(props.results.meanings[0].partOfSpeech);
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h3>{props.results.meanings[0].partOfSpeech}</h3>
      </div>
    );
  } else {
    return null;
  }
}
