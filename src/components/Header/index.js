import React from "react";
import "./style.css";


function Header () {
  return (
    <div>
      <div className="header">
        <h1 className="mb-4">Employee Directory</h1>
        <h5>Click on carrots to filter by heading or use the search box to narrow your results.</h5>
      </div>
      <div className="header-bottom"></div>
    </div>
  )
}

export default Header;