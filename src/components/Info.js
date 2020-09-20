import React from "react";

export default function Info(props) {
  const { xTurn, gameOver, winner } = props.infos;
  return (
    <div className="info">
      {gameOver || <h1>{xTurn ? "X" : "O"}'s turn</h1>}
      {gameOver && (
        <>
          <h1>Game Over</h1>
          <h1>{winner ? winner + " wins!" : "Draw!"}</h1>
        </>
      )}
    </div>
  );
}
