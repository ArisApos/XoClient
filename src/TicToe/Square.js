import React from 'react'
import {connect} from 'react-redux'
import {addSquare_A, changeXIsNext_A, changeStepNumber_A} from '../models/tic-tac-toe/'
import { dispatchAll } from '../libs'

//Helper actionFunctions
const addSquare = (gameId, index, xIsNext, stepNumber)=>{
  let input = xIsNext ? 'X':'O' 
  return addSquare_A(gameId, index, input, stepNumber)
};
const changeXIsNext = (gameId, xIsNext)=> changeXIsNext_A(gameId, !xIsNext);
const changeStepNumber = (gameId, oldStepNumber)=>changeStepNumber_A(gameId, oldStepNumber + 1);

//ComponentUI
const Square = ({gameId, i, squareValue, xIsNext, stepNumber, squareHandler, winner, winnerLine})=>{
  const winnerSquer = winner && winnerLine.some(location => location === i);
  const onClickSquare = ()=>winner || squareValue ? 1 : squareHandler(gameId, i, xIsNext, stepNumber);

  //Future Need  useEffect(() => {}, [gameId]);

  return (
    <button onClick={ onClickSquare }
      className={ winnerSquer ? "squareW squareA square" 
        : winner ?'squareA square' : 'square'
      }>
      { squareValue }
    </button>
  );
}

//Redux
const stateSquare = ({ games }, ownProps) => {
  // CURRENT GAME
 const { history, winnerResults, xIsNext, stepNumber } = games[ownProps.gameId] 
 return {
          squareValue: history[stepNumber].squares[ownProps.i],
          xIsNext,
          stepNumber,
          winner: winnerResults.winner && stepNumber === history.length-1 ? winnerResults.winner : null,
          winnerLine: winnerResults.winnerLine
         }
}

const dispatchSquare = dispatch => ({
  squareHandler: (gameId, input, xIsNext, stepNumber) => {
    dispatchAll(dispatch,
      addSquare(gameId, input, xIsNext, stepNumber),
      changeXIsNext(gameId, xIsNext),
      changeStepNumber(gameId, stepNumber)
    )
  }
})

const SquareContainer = connect(stateSquare, dispatchSquare)(Square)
export { SquareContainer }