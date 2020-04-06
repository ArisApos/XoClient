import { actionCreator } from "../../libs/actionCreactor";
import { SET_PLAYER_LOGGED_IN, SET_PLAYER_STATUS } from './actions';

const setPlayerLoggedIn_A = actionCreator(SET_PLAYER_LOGGED_IN, 'loggedIn');

const setPlayerStatus_A = actionCreator(SET_PLAYER_STATUS, 'payload');

export { setPlayerLoggedIn_A, setPlayerStatus_A };