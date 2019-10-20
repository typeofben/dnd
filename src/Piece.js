import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { getReplaceIndex } from "./Game";

import { Knight } from "./pieces/Knight";
import { Bishop } from "./pieces/Bishop";
import { King } from "./pieces/King";
import { Other1 } from "./pieces/Other1";
import { Other2 } from "./pieces/Other2";
import { Pawn } from "./pieces/Pawn";
import { Queen } from "./pieces/Queen";
import { Rook } from "./pieces/Rook";

const knightStyle = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move"
};
export const Piece = ({ i, name }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    end: getReplaceIndex(i),
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const renderPiece = () => {
    switch (name) {
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

  return (
    <>
      <div
        ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1
        }}
      >
        {renderPiece()}
      </div>
    </>
  );
};
