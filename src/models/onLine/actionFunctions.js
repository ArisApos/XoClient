import { actionCreator } from "../../libs/actionCreactor";
import { SET_LOGGED_STATUS, SET_PLAYER_STATUS, SET_PLAYERS } from "./actions";

const setPlayerLoggedIn = actionCreator(SET_LOGGED_STATUS, 'loggedIn', 'token');

const setPlayerStatus = actionCreator(SET_PLAYER_STATUS, 'payload');

const setPlayers = actionCreator(SET_PLAYERS, 'newPlayers');

export { setPlayerLoggedIn, setPlayerStatus, setPlayers };