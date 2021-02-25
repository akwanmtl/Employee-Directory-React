import React from "react";
import "./style.css";

function Table (props) {
  return (
    <div className="table-employee">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
        {props.results.map(employee => (
          <tr>
            <td scope="col"><img src={employee.picture.thumbnail}/></td>
            <td scope="col">{employee.name.first} {employee.name.last}</td>
            <td scope="col">{employee.phone}</td>
            <td scope="col">{employee.email}</td>
            <td scope="col">{employee.dob.date.substring(0,10)}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;