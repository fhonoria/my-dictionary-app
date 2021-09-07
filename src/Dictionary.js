import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    //documentation https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="Dictionary-header">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
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
                  className="btn btn-light"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container Results">
        <Results results={results} />
      </div>
    </div>
  );
}
