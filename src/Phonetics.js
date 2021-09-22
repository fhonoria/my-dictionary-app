import React from "react";

export default function Phonetic(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        {props.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <a href={phonetic.audio} target="_blank" rel="noreferrer">
                <i class="far fa-play-circle"></i>
              </a>
              {phonetic.text}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
