import React, { useState, useEffect } from "react";
import Board from "./Board";
import { observe } from "./Game";
const containerStyle = {
  width: 500,
  height: 500,
  border: "1px solid gray"
};
const config = [
  "bishop",
  "knight",
  "king",
  "other1",
  "other2",
  "pawn",
  "queen",
  "rook"
];
/**
 * The Chessboard Tutorial Application
 */
const ChessboardTutorialApp = () => {
  const [widgetPos, setWidgetPos] = useState(config);
  // the observe function will return an unsubscribe callback
  useEffect(() => observe(newPos => setWidgetPos(newPos)));
  return (
    <div>
      <div style={containerStyle}>
        <Board widgetPosition={widgetPos} />
      </div>
    </div>
  );
};
export default ChessboardTutorialApp;
