import React, { useCallback } from "react";
import { GameContainer, GamesMenu } from "./";
import { addNewGame_A } from "../models/tic-tac-toe/";
import { connect } from "react-redux";

//actionFunctions functions
const addNewGame = (gameId, playerXName, playerOName, timeLimmit) => addNewGame_A(gameId, playerXName, playerOName, timeLimmit);

//Component
const Games = ({ gamesIds, addNewGameDis }) => {
    const addNewGameDisUCB = useCallback((data) => addNewGameDis(data), []);
    const gameContainers = gamesIds.map(gameId=><GameContainer {...{key:gameId, gameId}} />)
  return (
    <>
      <GamesMenu {...{ addNewGameDisUCB }} />
      { gameContainers }
    </>
  );
};

//ReduxState&Dispatch
const stateGame = ({games}) => {
  return { gamesIds: Object.keys(games) };
};

const dispatchGame = dispatch => ({ 
    addNewGameDis:({newGameId, playerXName, playerOName, timeLimmit})=>{ 
      dispatch(addNewGame(newGameId, playerXName, playerOName, timeLimmit)) }
});
const GamesContainer = connect(stateGame, dispatchGame)(Games);
export { GamesContainer };


//Fast Game
//add dispatch to props via dispatchGame
{/* <div className="newGameButton"style={{ left: "300px" }}onClick={() =>dispatch({type: "ADD_NEW_GAME",
           newGameId: 0,playerXName: "aris",playerOName: "nina",timeLimmit: 4000})}/> */}