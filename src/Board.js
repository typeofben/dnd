import React from "react";
import { BoardSquare } from "./BoardSquare";
import { Knight } from "./pieces/Knight";
import { Bishop } from "./pieces/Bishop";
import { King } from "./pieces/King";
import { Other1 } from "./pieces/Other1";
import { Other2 } from "./pieces/Other2";
import { Pawn } from "./pieces/Pawn";
import { Queen } from "./pieces/Queen";
import { Rook } from "./pieces/Rook";

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
          {renderPiece(i)}
        </BoardSquare>
      </div>
    );
  }

  function renderPiece(i) {
    switch (widgetPosition[i]) {
      case "bishop":
        return <Bishop i={i} />;
      case "king":
        return <King i={i} />;
      case "other1":
        return <Other1 i={i} />;
      case "other2":
        return <Other2 i={i} />;
      case "pawn":
        return <Pawn i={i} />;
      case "queen":
        return <Queen i={i} />;
      case "knight":
        return <Knight i={i} />;
      case "rook":
        return <Rook i={i} />;
      default:
        return null;
    }
  }

  const squares = [];
  for (let i = 0; i < 8; i += 1) {
    squares.push(renderSquare(i));
  }

  return <div style={boardStyle}>{squares}</div>;
};

export default Board;
