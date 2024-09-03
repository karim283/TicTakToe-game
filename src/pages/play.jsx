
import logo from "../assets/images/tic.png";

import React from "react";
import { useGame } from "../context/GameContext";

export function Play() {
  const { state, dispatch } = useGame();

  const handleClick = (index) => {
    dispatch({ type: "MAKE_MOVE", index });
  };

  const handlePlayAgain = () => {
    dispatch({ type: "PLAY_AGAIN" });
  };

  const renderCell = (index) => {
    return (
      <div
        onClick={() => handleClick(index)}
        className={`w-[75px] h-[70px] rounded-[10px] flex justify-center items-center text-center cursor-pointer ${
          state.board[index] === "X"
            ? "bg-[#43115B] text-[#48D2FE]"
            : state.board[index] === "O"
            ? "bg-[#43115B] text-[#E2BE00]"
            : "bg-[#43115B]"
        }`}
      >
        <p className="text-[60px]">{state.board[index]}</p>
      </div>
    );
  };

  const gameResultMessage = () => {
    switch (state.gameStatus) {
      case "X":
        return "Player X Wins!";
      case "O":
        return "Player O Wins!";
      case "Draw":
        return "It's a Draw!";
      default:
        return "";
    }
  };

  const buttonColor = () => {
    return state.gameStatus
      ? "bg-green-500"
      : state.currentTurn === "X"
      ? "bg-[#48D2FE]"
      : "bg-[#E2BE00]";
  };

  return (
    <div>
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-full h-[80vh] sm:w-[45vw] md:w-[37vw] rounded-[30px] bg-[#2B0040] justify-center items-center z-10">
          <div className="flex justify-center items-center gap-3">
            <div className="w-[75px] h-[70px] rounded-[10px] bg-[#48D2FE] justify-center items-center text-center mt-10">
              <p className="text-black text-[15px] mt-1">PLAYER X</p>
              <p className="text-black text-[30px]">{state.scores.playerX}</p>
            </div>
            <div className="w-[75px] h-[70px] rounded-[10px] bg-[#BCDBF9] justify-center items-center text-center mt-10">
              <p className="text-black text-[15px] mt-1">DRAW</p>
              <p className="text-black text-[30px]">{state.scores.draw}</p>
            </div>
            <div className="w-[75px] h-[70px] rounded-[10px] bg-[#E2BE00] justify-center items-center text-center mt-10">
              <p className="text-black text-[15px] mt-1">PLAYER O</p>
              <p className="text-black text-[30px]">{state.scores.playerO}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 mt-5">
            {[0, 1, 2].map((row) => (
              <div key={row} className="grid grid-rows-3 gap-3">
                {[0, 1, 2].map((col) => renderCell(row * 3 + col))}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center">
            <button
              className={`w-[270px] h-[45px] rounded-[10px] cursor-default justify-center items-center text-center mt-10 text-[15px] font-bold ${buttonColor()}`}
            >
              {gameResultMessage() || `${state.currentTurn} Turn`}
            </button>
            {state.gameStatus && (
              <button
                onClick={handlePlayAgain}
                className="w-[270px] h-[45px] rounded-[10px] bg-[#F4F6F5] justify-center items-center text-center mt-5 text-[15px] font-bold"
              >
                Play Again
              </button>
            )}
          </div>
        </div>
      </div>
      <div>
        <img
          src={logo}
          alt=""
          className="w-0 h-0 md:w-72 md:h-80 relative bottom-72 z-0"
        />
      </div>
    </div>
  );
}
