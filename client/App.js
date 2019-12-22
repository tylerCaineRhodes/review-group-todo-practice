import React from "react";
import InputComponent from "./InputComponent";
import List from "./List";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      toDoList: ['buy milk', 'buy cheese']
    }
    this.handleChange=this.handleChange.bind(this);
    this.clicked=this.clicked.bind(this);
  }

  handleChange(event) {
    this.setState({
      textInput: event.target.value,
    })
  }

  clicked() {
    var temp = this.state.toDoList;
    temp.push(this.state.textInput);
    this.setState({
      toDoList: temp,
      textInput: ''
    })
  }

  render() {
    return (
      <div>
        <InputComponent
          handleChange={this.handleChange}
          text={this.state.textInput} 
          clicked={this.clicked}
        />
        <List
          list={this.state.toDoList}
        />
      </div>
    );
  }
}
