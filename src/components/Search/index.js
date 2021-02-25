import React from "react";
import "./style.css";

function Search (props) {
  return (
    <div className="search-bar">
      <input 
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        id="search"
        placeholder="Search"
      />
    </div>
  )
}

export default Search;