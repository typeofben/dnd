import React from "react";

const knightStyle = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move"
};
export const Bishop = () => {
  return (
    <>
      <div
        style={{
          ...knightStyle,
        }}
      >
        B
      </div>
    </>
  );
};
