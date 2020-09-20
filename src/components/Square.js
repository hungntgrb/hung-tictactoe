import React, { useContext } from "react";
import { XTurnContext } from "../index";

export default function Square(props) {
  const handleClick = useContext(XTurnContext);
  const { icon, pos } = props;
  const classCSS = icon === "X" ? "x" : icon === "O" ? "o" : "";

  return (
    <div className={"square " + classCSS} onClick={(e) => handleClick(e, pos)}>
      {icon}
    </div>
  );
}
