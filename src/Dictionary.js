import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("hello");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function search() {
    //documentation https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    //documentation https://www.pexels.com/api/documentation/#photos-search
    let pexelsApiKey =
      "563492ad6f91700001000001891db9cbae544d21b4ed67ac432f268c";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="Dictionary-header">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-4">
                  <h1>Dictionary</h1>
                </div>
                <div className="col-4 Search-field">
                  <input
                    type="text"
                    placeholder="Search for a word"
                    autoFocus
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
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
