import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row Header">
            <div className="col-4">
              <h1>Dictionary</h1>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control shadow"
                onChange={handleKeyword}
              ></input>
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
