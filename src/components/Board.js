import React from "react";

import Square from "./Square";

export default function Board(props) {
  const board = props.board;
  return (
    <div className="board">
      {board.map((cell, idx) => (
        <Square key={idx.toString()} icon={cell} pos={idx} />
      ))}
    </div>
  );
}
