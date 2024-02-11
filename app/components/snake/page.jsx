'use client';

const Snake = ({ snakeSegments }) => {
  return (
    <>
      {snakeSegments.map((segment, index) => (
        <div
          key={index}
          className="snake-segment w-10 h-10 bg-blue-500"
          style={{
            gridColumnStart: segment.x + 1,
            gridRowStart: segment.y + 1,
          }}
        />
      ))}
    </>
  );
};

export default Snake;
