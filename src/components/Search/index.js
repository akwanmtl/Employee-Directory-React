import React from "react";
import "./style.css";

function Search () {
  return (
    <div className="search-bar">
      <input 
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        id="search"
        placeholder="Search"
      />
    </div>
  )
}

export default Search;