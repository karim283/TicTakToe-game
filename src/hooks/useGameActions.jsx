import { useGame } from "../context/GameContext";

export function useGameActions() {
  const { dispatch } = useGame();

  const handleClick = (index) => {
    dispatch({ type: "MAKE_MOVE", index });
  };

  const resetGame = () => {
    dispatch({ type: "RESET_GAME" });
  };

  const resetScores = () => {
    dispatch({ type: "RESET_SCORES" });
  };

  const handleEndGame = () => {
    const state = useGame().state;
    const winner = state.winner;
    if (winner) {
      if (winner === "Draw") {
        dispatch({ type: "UPDATE_SCORES", player: "draw" });
      } else {
        dispatch({ type: "UPDATE_SCORES", player: `player${winner}` });
      }
    }
  };

  return { handleClick, resetGame, resetScores, handleEndGame };
}
