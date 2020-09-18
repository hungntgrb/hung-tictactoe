import React from "react";

import Square from "./Square";

export default function Board() {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="board">
      {nums.map((num) => (
        <Square key={num.toString()} icon="X" />
      ))}
    </div>
  );
}
