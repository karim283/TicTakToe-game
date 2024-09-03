import React, { createContext, useContext, useReducer, useEffect } from "react";

const GameContext = createContext();

const initialState = {
  board: Array(9).fill(null),
  currentTurn: "X",
  scores: {
    playerX: 0,
    playerO: 0,
    draw: 0,
  },
  gameStatus: null,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "MAKE_MOVE":
      const { index } = action;
      if (state.board[index] || state.gameStatus) return state;
      const newBoard = state.board.slice();
      newBoard[index] = state.currentTurn;
      const winner = calculateWinner(newBoard);
      return {
        ...state,
        board: newBoard,
        currentTurn: state.currentTurn === "X" ? "O" : "X",
        gameStatus: winner,
        ...(winner && { scores: updateScores(state.scores, winner) }),
      };
    case "RESET_GAME":
      return {
        ...state,
        board: Array(9).fill(null),
        currentTurn: "X",
        gameStatus: null,
      };
    case "RESET_SCORES":
      return {
        ...state,
        scores: { playerX: 0, playerO: 0, draw: 0 },
      };
    case "PLAY_AGAIN":
      return {
        ...state,
        board: Array(9).fill(null),
        gameStatus: null,
      };
    default:
      return state;
  }
};

const updateScores = (scores, winner) => {
  switch (winner) {
    case "X":
      return { ...scores, playerX: scores.playerX + 1 };
    case "O":
      return { ...scores, playerO: scores.playerO + 1 };
    case "Draw":
      return { ...scores, draw: scores.draw + 1 };
    default:
      return scores;
  }
};

const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return board.every((cell) => cell) ? "Draw" : null;
};

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState, (initial) => {
    const storedState = localStorage.getItem("ticTacToeState");
    return storedState ? JSON.parse(storedState) : initial;
  });

  useEffect(() => {
    localStorage.setItem("ticTacToeState", JSON.stringify(state));
  }, [state]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
