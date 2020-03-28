import React from 'react'
import { Board, TotalScore, GameInfo, Timer } from './'
import { connect } from 'react-redux'
import { changeXIsNext_A, changeStepNumber_A, cut_A, losePoints_A } from '../../models/tic-tac-toe/'
import { dispatchAll } from '../../libs'
import './Static/game.scss';

//actionFunctions functions
const changeXIsNext = (gameId, step) => changeXIsNext_A(gameId, step % 2 === 0);
const changeStepNumber = (gameId, step) => changeStepNumber_A(gameId, step);
const cut = (gameId, step) => cut_A(gameId, step);
const losePoints = (gameId, playerXO, points) => losePoints_A(gameId, playerXO, points);

//Component
const Game = ({
  gameId, score, winner, historyLength, xIsNext, timeTravelDis, cutDis, stepNumber,
  playerOName, playerXName, timeLimmit, losePointsDis }) => {
    return (
      <div className="game">
        <Board { ...{gameId}  }/>
        <GameInfo { ...{gameId, historyLength, stepNumber, cutDis, timeTravelDis, winner, xIsNext } } />
        <TotalScore { ...{ playerXName, playerOName, winner, score } } />
        <Timer { ...{ gameId, timeLimmit, xIsNext, losePointsDis } } />
      </div>
    );
}

//ReduxState&Dispatch
const stateGame = ({ games }, ownProps) => {
  const { gameSettings: {
           playerXName, 
           playerOName, 
           timeLimmit,
          },
           xIsNext, stepNumber, score, history, winnerResults } = games[ownProps.gameId];
  return {
    winner: winnerResults.winner && stepNumber === history.length - 1 ? winnerResults.winner : null,
    historyLength: Array(history.length).fill(null),
    xIsNext,
    stepNumber,
    score,
    playerXName,
    playerOName,
    timeLimmit
  };
};

const dispatchGame = dispatch => ({
    timeTravelDis: (gameId, step) => {
        dispatchAll(dispatch,
            changeXIsNext(gameId, step),
            changeStepNumber(gameId, step))
    },
    cutDis: (gameId, step) => { dispatch(cut(gameId, step)) },
    losePointsDis: (gameId, playerXO, points) => { dispatch(losePoints(gameId, playerXO, points)) }
})
const GameContainer = connect(stateGame, dispatchGame)(Game)
export { GameContainer }