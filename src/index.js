import "./main.scss";

import React, { useState, createContext, useEffect } from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import Info from "./components/Info";

export const XTurnContext = createContext();

function Game() {
  const [gameOver, setGameOver] = useState(false);
  const [xTurn, setXTurn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState("");

  const handleClick = (e, pos) => {
    const newBoard = board.slice();
    if (gameOver || board[pos]) {
      return;
    }
    newBoard[pos] = xTurn ? "X" : "O";
    setBoard(newBoard);
    setXTurn((prev) => !prev);
  };

  const everyCellIsFull = () => {
    return board.every((val) => val !== null);
  };

  useEffect(() => {
    const w = checkWinner(board);
    if (w) {
      setWinner(w);
      setGameOver(true);
    } else if (everyCellIsFull()) {
      setGameOver(true);
    }
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setGameOver(false);
    setXTurn(true);
    setWinner("");
  };

  return (
    <>
      <Info infos={{ xTurn, gameOver, winner }} />
      <button className="reset" onClick={resetGame}>
        Restart
      </button>
      <XTurnContext.Provider value={handleClick}>
        <Board board={board} />
      </XTurnContext.Provider>
    </>
  );
}

function checkWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [c1, c2, c3] = line;
    if (board[c1] && board[c2] === board[c1] && board[c3] === board[c1]) {
      return board[c1];
    }
  }
  return "";
}

ReactDOM.render(<Game />, document.getElementById("root"));
