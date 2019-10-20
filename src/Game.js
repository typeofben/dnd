let knightPosition = [
  "bishop",
  "knight",
  "king",
  "other1",
  "other2",
  "pawn",
  "queen",
  "rook"
];
let observers = [];
let replacedIndex;

function emitChange() {
  observers.forEach(o => o && o(knightPosition));
}

export function observe(o) {
  observers.push(o);
  emitChange();
  return () => {
    observers = observers.filter(t => t !== o);
  };
}

export function getReplaceIndex(value) {
  replacedIndex = value;
}

export function moveKnight(i) {
  const movedTo = i;
  const movedFrom = replacedIndex;

  // swap positions in index
  const newPositions = ([knightPosition[movedTo], knightPosition[movedFrom]] = [
    knightPosition[movedFrom],
    knightPosition[movedTo]
  ]);
  
  // pass unchanged indices with new
  knightPosition = [...knightPosition, newPositions];
  
  // publish the change
  emitChange();
}
