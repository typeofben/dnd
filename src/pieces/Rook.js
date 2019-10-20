import React from "react";

const knightStyle = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move"
};
export const Rook = () => {
  return (
    <>
      <div
        style={{
          ...knightStyle
        }}
      >
        R
      </div>
    </>
  );
};