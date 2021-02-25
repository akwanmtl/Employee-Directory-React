import React from "react";
import "./style.css";

function Table () {
  return (
    <div className="table-employee">
      <table className="table table-hover">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>

      </table>
    </div>
  )
}

export default Table;