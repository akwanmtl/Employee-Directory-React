import React, { Component } from "react";
import Search from "./SearchBar";
import Table from "./Table";
import API from "../../utils/API";

// Main functionality of the application
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: [],
      all: [],
      toggle: {
        'name' : false,
        'phone' : false,
        'email' : false,
        'dob' : false
      } 
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.generateEmployee();
  }

  // calls on the API and retrieve the data
  // create a new object to simplify the object and include id as index
  generateEmployee() {
    API.generate()
      .then(res => {
        let newRes = res.data.results.map((employee, index) => {
          return {
            'name' : employee.name.first + ' ' + employee.name.last,
            'phone' : employee.phone,
            'email' : employee.email,
            'dob' : employee.dob.date.substring(0,10),
            'picture': employee.picture.thumbnail,
            'id' : index
          }

        })
        this.setState({ results: newRes, all: newRes })
      })
      .catch(err => console.log(err));
  };

  // filters the list of employee as the user search for an employee
  handleInputChange(event){
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({ 
      results: this.state.all.filter(employee => employee.name.toLowerCase().includes(value.toLowerCase())) ,
      [name]: value
    });
  };

  // when the user click on the table header, it will sort in asc or desc order.
  // if the column has been sorted in one order, it will sort in the reverse
  handleClick(id) {
    const all = [...this.state.all];
    const toggle = {...this.state.toggle}
    toggle[id] = !toggle[id]
    all.sort((a,b) =>{
      if(toggle[id]) return (a[id] > b[id]) ? 1 : -1;
      else return (a[id] < b[id]) ? 1 : -1;
    })
    const results = all.filter(employee => employee.name.toLowerCase().includes(this.state.search.toLowerCase()));
    this.setState({ 
      all,
      toggle,
      results
    });
  };

  // renders the component
  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Table 
        results={this.state.results} 
        handleClick={this.handleClick}
        toggle={this.state.toggle}
        />
      </div>
    );
  }
}

export default Main;
