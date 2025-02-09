import React from "react";

type GameBoardProps = {
  board: number[][];
};

const GameBoard: React.FC<GameBoardProps> = ({ board }) => {
  console.log("Rendering GameBoard");

  const boardStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(9, 40px)",
    gap: "2px",
    border: "4px solid black",
    padding: "5px",
  };

  const cellStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "bold",
    border: "1px solid gray",
  };

  return (
    <div style={boardStyle}>
      {board.map((row, rowIndex) =>
        row.map((num, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              ...cellStyle,
              borderRight:
                colIndex % 3 === 2 ? "2px solid black" : "1px solid gray",
              borderBottom:
                rowIndex % 3 === 2 ? "2px solid black" : "1px solid gray",
            }}
          >
            {num !== 0 ? num : ""}
          </div>
        ))
      )}
    </div>
  );
};

export default GameBoard;
