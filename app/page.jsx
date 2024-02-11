import GameBoard from "./components/gameboard/page";
import Snake from "./components/snake/page"


const HomePage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <GameBoard />
    </div>
  );
};


export default HomePage;



