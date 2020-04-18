import { actionCreator } from "../../libs/actionCreactor";
import {
  SET_LOGGED_STATUS,
  SET_PLAYER_STATUS,
  SET_PLAYERS,
  SET_SERVER_NOTIFICATION,
} from "./actionTypes";

const setPlayerLoggedStatus = actionCreator(SET_LOGGED_STATUS, 'loggedIn', 'token');

const setPlayerStatus = actionCreator(SET_PLAYER_STATUS, 'payload');

const setPlayers = actionCreator(SET_PLAYERS, 'players');

const setServerNotificatons = actionCreator(SET_SERVER_NOTIFICATION, 'requesting', 'message', 'success');

export {
  setPlayerLoggedStatus,
  setPlayerStatus,
  setPlayers,
  setServerNotificatons,
};