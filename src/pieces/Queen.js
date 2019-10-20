import React from "react";

const knightStyle = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move"
};
export const Queen = () => {
  return (
    <>
      <div
        style={{
          ...knightStyle
        }}
      >
        Q
      </div>
    </>
  );
};
