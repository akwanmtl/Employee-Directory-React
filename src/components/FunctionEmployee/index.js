import React, { Component } from "react";
import Search from "../Search";
import Table from "../TABLE";
import API from "../../utils/API";

class FunctionEmployee extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.generateEmployee();
  }

  generateEmployee = () => {
    API.search()
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Table results={this.state.results} />
      </div>
    );
  }
}

export default FunctionEmployee;
