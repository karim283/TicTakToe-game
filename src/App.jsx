// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Game } from "./pages/game.jsx";
import { Play } from "./pages/play";
import { GameProvider } from "./context/GameContext";

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;
