import { actionCreator } from "../../libs/actionCreactor";
import {
  SET_LOGGED_STATUS,
  SET_PLAYER_STATUS,
  SET_PLAYERS,
  SET_SERVER_NOTIFICATION,
  GET_PLAYER_REQUESTED,
  POST_PLAYER_REQUESTED,
} from "./actionTypes";

const setPlayerLoggedStatus = actionCreator(SET_LOGGED_STATUS, 'loggedIn', 'token');

const setPlayerStatus = actionCreator(SET_PLAYER_STATUS, 'payload');

const setPlayers = actionCreator(SET_PLAYERS, 'players');

const setServerNotificatons = actionCreator(SET_SERVER_NOTIFICATION, 'requesting', 'message', 'success', 'identifier');

const getPlayerRequested = actionCreator(GET_PLAYER_REQUESTED, 'name', 'password', 'endpoint', 'method', 'identifier');

const postPlayerRequested = actionCreator(POST_PLAYER_REQUESTED, 'data', 'endpoint', 'method', 'headers', 'identifier' );

export {
  setPlayerLoggedStatus,
  setPlayerStatus,
  setPlayers,
  setServerNotificatons,
  getPlayerRequested,
  postPlayerRequested,
};