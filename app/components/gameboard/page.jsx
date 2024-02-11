'use client';
import Snake from "../snake/page";
export const BOARD_SIZE = 10;

let board;

const GameBoard = ({children}) => {
  const getBoard = () => {
    return Array.from({ length: BOARD_SIZE }, (_, i) => Array.from({ length: BOARD_SIZE }, (_, j) => ({ x: i, y: j })));
  };
  board =
    board ||
    (function () {
      return getBoard();
    })();

  return (
    <div className="game-board bg-green-200 p-4">
      <div className="grid grid-cols-10 gap-1">
        <Snake />
        {board.map((row, i) => row.map((cell, j) => <div key={`${i}-${j}`} className="w-10 h-10 bg-green-500" />))}
      </div>
    </div>
  );
};

export default GameBoard;
