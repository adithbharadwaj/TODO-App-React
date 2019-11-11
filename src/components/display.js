import React from "react";
import "./display.css";

export default class Display extends React.Component {
  send = id => {
    this.props.clicked(id);
  };

  render() {
    return (
      <div className="display_div">
        {this.props.list.map(item => (
          <ul
            key={item.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <li
              onClick={() => this.send(item.id)}
              style={{
                textDecoration: item.complete ? "line-through" : "",
                backgroundColor: item.complete ? "red" : ""
              }}
            >
              {item.text}
            </li>
            <button
              style={{ marginLeft: 10 }}
              onClick={() => {
                this.props.handleDelete(item.id);
              }}
            >
              X
            </button>
          </ul>
        ))}
      </div>
    );
  }
}
