import React from "react";

import Square from "./Square";

export default function Board(props) {
  //   const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const { board, onClick } = props;
  return (
    <div className="board">
      {board.map((cell, idx) => (
        <Square key={idx.toString()} icon={cell} onClick={() => onClick(idx)} />
      ))}
    </div>
  );
}
