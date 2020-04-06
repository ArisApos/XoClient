import { actionCreator } from "../../libs/actionCreactor";
import { SET_LOGGED_STATUS, SET_PLAYER_STATUS } from './actions';

const setPlayerLoggedIn_A = actionCreator(SET_LOGGED_STATUS, 'loggedIn', 'token');

const setPlayerStatus_A = actionCreator(SET_PLAYER_STATUS, 'payload');

export { setPlayerLoggedIn_A, setPlayerStatus_A };