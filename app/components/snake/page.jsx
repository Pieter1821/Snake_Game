"use client"
import { useState } from 'react';
import { BOARD_SIZE } from '../gameboard/page';

const INITIAL_SNAKE_LENGTH = 3;

const Snake = () => {
  const [snakeSegments, setSnakeSegments] = useState(() =>
    Array.from({ length: INITIAL_SNAKE_LENGTH }, (_, i) => ({
      x: Math.floor(BOARD_SIZE / 2),
      y: Math.floor(BOARD_SIZE / 2) + i,
    }))
  );

  return (
    <>
      {snakeSegments.map((segment, index) => (
        <div key={index} className="snake-segment w-10 h-10 bg-blue-500"></div>
      ))}
    </>
  );
};
export default Snake;
