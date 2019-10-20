import React from "react";

const knightStyle = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move"
};
export const Knight = () => {
  return (
    <>
      <div
        style={{
          ...knightStyle
        }}
      >
        K
      </div>
    </>
  );
};
