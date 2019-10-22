import React from "react";
import "./App.css";
import DisplayEmployee from "./components/DisplayEmployee";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: ""
    };
    this.getEmployee = this.getEmployee.bind(this);
  }

  getEmployee() {
    axios
      .get("https://quests.wilders.dev/simpsons-quotes/quotes")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data[0]);

        this.setState({
          employee: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <DisplayEmployee employee={this.state.employee} />
        <button type="button" onClick={this.getEmployee}>
          Get employee
        </button>
      </div>
    );
  }
}

export default App;
