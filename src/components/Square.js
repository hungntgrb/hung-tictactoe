import React, { useContext } from "react";
import { XTurnContext } from "../index";

export default function Square(props) {
  const handleClick = useContext(XTurnContext);
  const { icon, pos } = props;

  return (
    <div className="square" onClick={(e) => handleClick(e, pos)}>
      {icon}
    </div>
  );
}
