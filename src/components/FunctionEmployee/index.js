import React, { Component } from "react";
import Search from "../Search";
import Table from "../Table";
import API from "../../utils/API";

class FunctionEmployee extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      search: "",
      results: [],
      all: [] 
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  // state = {
  //   search: "",
  //   results: []
  // };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.generateEmployee();
  }

  generateEmployee() {
    API.generate()
      .then(res => {
        this.setState({ results: res.data.results, all: res.data.results })
      })
      .catch(err => console.log(err));
  };

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({ results: 
      this.state.all.filter(employee => employee.name.first.toLowerCase().startsWith(value.toLowerCase())) })
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Table results={this.state.results} />
      </div>
    );
  }
}

export default FunctionEmployee;
