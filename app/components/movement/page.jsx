import { useEffect, useState } from 'react';
import GameBoard from '../gameboard/page';
import Snake from '../snake/page';

export const Movement = () => {
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [direction, setDirection] = useState({ x: 0, y: 1 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newHead = { x: prevSnake[0].x + direction.x, y: prevSnake[0].y + direction.y };
        return [newHead, ...prevSnake.slice(0, -1)];
      });
    };

    const intervalId = setInterval(moveSnake, 200);

    // Cleanup function to clear the interval when the component unmounts or direction changes
    return () => clearInterval(intervalId);
  }, [direction]); // Include direction in the dependency array to re-establish the interval when direction changes

  return (
    <GameBoard>
        <Snake snake={snake} />
    </GameBoard>
  );
};

