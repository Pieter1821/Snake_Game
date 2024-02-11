import { useEffect, useState } from 'react';
import GameBoard from '../gameboard/page';
import Snake from '../snake/page';

export const Movement = () => {
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [direction, setDirection] = useState({ x: 0, y: 1 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newDirection = getNewDirection(e.key);
      if (!newDirection) return;

      // Prevent the snake from reversing directly back onto itself
      if (newDirection.x + direction.x === 0 && newDirection.y + direction.y === 0) {
        return;
      }

      setDirection(newDirection);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  function getNewDirection(key) {
    switch (key) {
      case 'ArrowUp':
        return { x: 0, y: -1 };
      case 'ArrowDown':
        return { x: 0, y: 1 };
      case 'ArrowLeft':
        return { x: -1, y: 0 };
      case 'ArrowRight':
        return { x: 1, y: 0 };
      default:
        return null;
    }
  }
  return (
    <GameBoard>
      <Snake snakeSegments={snake} />
    </GameBoard>
  );
};
