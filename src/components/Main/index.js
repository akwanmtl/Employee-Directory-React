import React, { Component } from "react";
import Search from "./SearchBar";
import Table from "./Table";
import API from "../../utils/API";

class FunctionEmployee extends Component {

  constructor(props) {
    super(props)
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

  generateEmployee() {
    API.generate()
      .then(res => {
        let newRes = res.data.results.map(employee => {
          return {
            'name' : employee.name.first + ' ' + employee.name.last,
            'phone' : employee.phone,
            'email' : employee.email,
            'dob' : employee.dob.date.substring(0,10),
            'picture': employee.picture.thumbnail
          }

        })
        this.setState({ results: newRes, all: newRes })
      })
      .catch(err => console.log(err));
  };

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({ 
      results: this.state.all.filter(employee => employee.name.toLowerCase().includes(value.toLowerCase())) ,
      [name]: value
    });
  };

  handleClick(event) {
    const id = event.target.id;
    let temp = [...this.state.all];
    let tempToggle = {...this.state.toggle}
    tempToggle[id] = !tempToggle[id]
    console.log(this.state.toggle[id])
    temp.sort((a,b) =>{
      if(tempToggle[id]) return (a[id] > b[id]) ? 1 : -1;
      else return (a[id] < b[id]) ? 1 : -1;
    })
    console.log(temp)
    this.setState({ 
      all: [...temp],
      toggle: tempToggle,
    });
    console.log(this.state.all)
    this.setState({
      results: temp.filter(employee => employee.name.toLowerCase().includes(this.state.search.toLowerCase())) ,
    })
    console.log(id)
  };


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

export default FunctionEmployee;
