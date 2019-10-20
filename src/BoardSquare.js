import React from "react";
import { useDrop } from "react-dnd";
import { Square } from "./Square";
import {  moveKnight } from "./Game";
import { ItemTypes } from "./ItemTypes";
import Overlay from "./Overlay";
export const BoardSquare = ({ index, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.KNIGHT,
    drop: () => moveKnight(index),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });

  return (
    <div
      ref={drop}
      style={{
        position: "relative",
        width: "100%",
        height: "100%"
      }}
    >
      <Square >{children}</Square>
      {isOver && <Overlay color="green" />}
    </div>
  );
};
