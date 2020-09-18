import "./main.scss";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";

export default class Game extends Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
