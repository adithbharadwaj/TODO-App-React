import React from "react";

import "./add_todo.css";
import shortid from "shortid";

export default class Add extends React.Component {
  state = {
    input: ""
  };

  setInput = event => {
    this.setState({
      input: event.target.value
    });
  };

  handle_submit = () => {
    this.props.add({
      text: this.state.input,
      complete: false,
      id: shortid.generate()
    });
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <div className="input_div">
        <input
          value={this.state.input}
          onChange={this.setInput}
          placeholder="todo"
        ></input>
        <button onClick={this.handle_submit}>Submit</button>
      </div>
    );
  }
}
