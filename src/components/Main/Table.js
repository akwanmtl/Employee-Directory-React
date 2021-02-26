import React from "react";
import "./Table.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

function Table (props) {
  return (
    <div className="table-employee">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" onClick={() => props.handleClick('name')} className="pointer" >Name  <span className="icon"><FontAwesomeIcon icon={faCaretUp} className={`rotate-${props.toggle['name']}`}/></span></th>
            <th scope="col" onClick={() => props.handleClick('phone')} className="pointer">Phone  <span className="icon"><FontAwesomeIcon icon={faCaretUp} className={`rotate-${props.toggle['phone']}`}/></span></th>
            <th scope="col" onClick={() => props.handleClick('email')} className="pointer">Email  <span className="icon"><FontAwesomeIcon icon={faCaretUp} className={`rotate-${props.toggle['email']}`}/></span></th>
            <th scope="col" onClick={() => props.handleClick('dob')} className="pointer">DOB  <span className="icon"><FontAwesomeIcon icon={faCaretUp} className={`rotate-${props.toggle['dob']}`}/></span></th>
          </tr>
        </thead>
        <tbody>
        {props.results.map(employee => (
          <tr key={employee.id}>
            <td><img src={employee.picture} alt={employee.name}/></td>
            <td>{employee.name}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.dob}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;