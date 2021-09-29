import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        {props.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <a href={phonetic.audio} target="_blank" rel="noreferrer">
                <i className="far fa-play-circle"></i>
              </a>
              <span className="text">{phonetic.text}</span>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
