import { actionCreator } from '../../libs/actionCreactor'
import {
  ADD_SQUARE,
  CHANGE_STEP,
  CHANGE_XISNEXT,
  CUT,
  ADD_NEW_GAME,
  LOSE_POINTS
} from "./actions";

const addSquare_A = actionCreator(ADD_SQUARE, 'gameId','index', 'input', 'step');
const changeXIsNext_A = actionCreator(CHANGE_XISNEXT, 'gameId', 'xTurn');
const changeStepNumber_A = actionCreator(CHANGE_STEP,  'gameId','step');
const cut_A = actionCreator(CUT, 'gameId', 'step');
const addNewGame_A = actionCreator(ADD_NEW_GAME, 'newGameId','playerXName', 'playerOName', 'timeLimmit');
const losePoints_A = actionCreator(LOSE_POINTS, 'gameId', 'playerXO', 'points');

export {
  addSquare_A,
  changeXIsNext_A,
  changeStepNumber_A,
  cut_A,
  addNewGame_A,
  losePoints_A
};