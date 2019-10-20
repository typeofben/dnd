import React from "react";

const knightStyle = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move"
};
export const Pawn = () => {
  return (
    <>
      <div
        style={{
          ...knightStyle
        }}
      >
        P
      </div>
    </>
  );
};
