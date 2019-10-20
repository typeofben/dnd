import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { getReplaceIndex } from "../Game";

const knightStyle = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move"
};
export const Knight = ({i}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    end: getReplaceIndex(i),
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
  return (
    <>
      <div
        ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1
        }}
      >
        K
      </div>
    </>
  );
};
