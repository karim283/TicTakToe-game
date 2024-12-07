import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./pages/game.jsx";
import { Play } from "./pages/play";
import { Play2 } from "./pages/play2";
import { GameProvider } from "./context/GameContext";

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/play" element={<Play />} />
          <Route path="/play2" element={<Play2 />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;
