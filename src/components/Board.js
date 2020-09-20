import React from "react";

import Square from "./Square";

export default function Board(props) {
  const board = props.board;
  return (
    <div className="board">
      {board.map((icon, idx) => (
        <Square key={idx.toString()} icon={icon} pos={idx} />
      ))}
    </div>
  );
}
