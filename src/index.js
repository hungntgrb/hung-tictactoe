import "./main.scss";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Array(9).fill(null),
      xTurn: true,
      gameOver: false,
    };
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  handleSquareClick(i) {
    let squares = this.state.board.slice();
    if (squares.every((x) => x !== null)) {
      this.setState({ gameOver: true });
    }
    if (squares[i]) {
      return;
    }
    squares[i] = this.state.xTurn ? "X" : "O";
    this.setState({ board: squares, xTurn: !this.state.xTurn });
  }

  render() {
    return (
      <div>
        <Board
          onClick={(i) => this.handleSquareClick(i)}
          board={this.state.board}
        />
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
