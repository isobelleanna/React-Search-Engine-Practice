import React from "react";
import "./styles.css";
import "./SearchEngine";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <SearchEngine />
    </div>
  );
}
