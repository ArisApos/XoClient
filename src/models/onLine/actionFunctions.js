import { actionCreator } from "../../libs/actionCreactor";
import { SET_PLAYER_LOGGED_IN } from './actions';

const setPlayerLoggedIn_A = actionCreator(SET_PLAYER_LOGGED_IN, 'loggedIn');

export { setPlayerLoggedIn_A };