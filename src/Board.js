import React from "react";
import { BoardSquare } from "./BoardSquare";
import { Piece } from "./Piece";

/** Styling properties applied to the board element */
const boardStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap"
};
/** Styling properties applied to each square element */
const squareStyle = { width: "12.5%", height: "12.5%" };
/**
 * The chessboard component
 * @param props The react props
 */

const Board = ({ widgetPosition }) => {
  function renderSquare(i) {
    return (
      <div key={i} style={squareStyle}>
        <BoardSquare index={i}>
          <Piece i={i} name={widgetPosition[i]} />
        </BoardSquare>
      </div>
    );
  }

  const squares = [];
  for (let i = 0; i < 8; i += 1) {
    squares.push(renderSquare(i));
  }

  return <div style={boardStyle}>{squares}</div>;
};

export default Board;
