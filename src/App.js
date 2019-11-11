import React from "react";
import "./App.css";
import Add from "./components/add_todo";
import Display from "./components/display";

class App extends React.Component {
  state = {
    list: [],
    filter: "all"
  };

  add_todo = value => {
    this.setState({
      list: [value, ...this.state.list]
    });
  };

  handle_click = idx => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === idx) {
          return {
            id: item.id,
            complete: !item.complete,
            text: item.text
          };
        } else {
          return item;
        }
      })
    });
  };

  delete = id => {
    this.setState({
      list: this.state.list.filter(x => x.id !== id)
    });
  };

  render() {
    var todo = [];
    if (this.state.filter === "all") {
      todo = this.state.list;
    } else if (this.state.filter === "active") {
      todo = this.state.list.filter(x => !x.complete);
    } else {
      todo = this.state.list.filter(x => x.complete);
    }

    return (
      <div>
        <div className="header">
          <h1>Todo App</h1>
        </div>
        <div className="App">
          <div className="add_todo">
            <Add add={this.add_todo} />
          </div>

          <div>
            <Display
              list={todo}
              clicked={this.handle_click}
              handleDelete={this.delete}
            />
            <button onClick={() => this.setState({ filter: "all" })}>
              All
            </button>
            <button onClick={() => this.setState({ filter: "active" })}>
              Active
            </button>
            <button onClick={() => this.setState({ filter: "complete" })}>
              Complete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
