import logo from "../assets/images/tic.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";

export function Game() {
  const { state, dispatch } = useGame();
  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate("/play");
  };

  const handleResetScores = () => {
    dispatch({ type: "RESET_SCORES" });
  };
  return (
    <div>
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className=" w-full h-[80vh]  sm:w-[45vw] md:w-[37vw] rounded-[30px] bg-[#2B0040]  justify-center items-center z-10">
          <div className="   flex justify-center items-center gap-3">
            <div className="w-[75px] h-[70px] rounded-[10px] bg-[#48D2FE] justify-center items-center text-center mt-10 ">
              <p className="text-black text-[15px] mt-1  ">PLAYER X</p>
              <p className="text-black text-[30px]  ">{state.scores.playerX}</p>
            </div>
            <div className="w-[75px] h-[70px] rounded-[10px] bg-[#BCDBF9] justify-center items-center text-center mt-10 ">
              <p className="text-black text-[15px] mt-1 ">DRAW</p>
              <p className="text-black text-[30px]  ">{state.scores.draw}</p>
            </div>
            <div className="w-[75px] h-[70px] rounded-[10px] bg-[#E2BE00] justify-center items-center text-center mt-10 ">
              <p className="text-black text-[15px] mt-1  ">PLAYER O</p>
              <p className="text-black text-[30px]  ">{state.scores.playerO}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="grid grid-rows-3 gap-3 mt-5">
              <div className="w-[75px] h-[70px] rounded-[10px] bg-[#43115B] justify-center items-center text-center  "></div>
              <div className="w-[75px] h-[70px] rounded-[10px] bg-[#43115B] justify-center items-center text-center  "></div>
              <div className="w-[75px] h-[70px] rounded-[10px] bg-[#43115B] justify-center items-center text-center  "></div>
            </div>
            <div className="grid grid-rows-3 gap-3 mt-5">
              <div className="w-[75px] h-[70px] rounded-[10px] bg-[#43115B] justify-center items-center text-center  "></div>
              <div className="w-[75px] h-[70px] rounded-[10px] bg-[#43115B] justify-center items-center text-center  "></div>
              <div className="w-[75px] h-[70px] rounded-[10px] bg-[#43115B] justify-center items-center text-center  "></div>
            </div>
            <div className="grid grid-rows-3 gap-3 mt-5">
              <div className="w-[75px] h-[70px] rounded-[10px] bg-[#43115B] justify-center items-center text-center  "></div>
              <div className="w-[75px] h-[70px] rounded-[10px] bg-[#43115B] justify-center items-center text-center  "></div>
              <div className="w-[75px] h-[70px] rounded-[10px] bg-[#43115B] justify-center items-center text-center  "></div>
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <button
              onClick={handleNewGame}
              className="w-[270px] h-[45px] rounded-[10px] bg-[#F4F6F5] justify-center items-center text-center mt-10 text-[15px] font-bold "
            >
              New Game
            </button>
          </div>
          <div className="flex justify-center items-center relative bottom-7 ">
            <button
              onClick={handleResetScores}
              className="w-[270px] h-[45px] rounded-[10px] bg-[#F4F6F5] bg-opacity-[29%] justify-center items-center text-center mt-10 text-[15px] text-white font-bold "
            >
              Reset Score
            </button>
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
