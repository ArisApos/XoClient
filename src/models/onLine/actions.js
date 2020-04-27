import { actionCreator } from "../../libs/actionCreactor";
import {
  SET_LOGGED_STATUS,
  SET_PLAYER_STATUS,
  SET_PLAYERS,
  SET_SERVER_NOTIFICATION,
  GET_PLAYER_REQUESTED,
  POST_PLAYER_REQUESTED,
  SET_SOCKET_DATA,
  LOGOUT
} from "./actionTypes";

const setPlayerLoggedStatus = actionCreator(SET_LOGGED_STATUS, 'loggedIn', 'token');

const setPlayerStatus = actionCreator(SET_PLAYER_STATUS, 'payload');

const setPlayers = actionCreator(SET_PLAYERS, 'players', 'clear');

const setServerNotification = actionCreator(SET_SERVER_NOTIFICATION, 'requesting', 'message', 'success', 'utilities');

const getPlayerRequested = actionCreator(GET_PLAYER_REQUESTED, 'name', 'password', 'endpoint', 'method', 'utilities');

const postPlayerRequested = actionCreator(POST_PLAYER_REQUESTED, 'data', 'endpoint', 'method', 'headers', 'utilities' );

const setSocket = actionCreator(SET_SOCKET_DATA, 'socketData');

const logout = actionCreator(LOGOUT);


export {
  setPlayerLoggedStatus,
  setPlayerStatus,
  setPlayers,
  setServerNotification,
  getPlayerRequested,
  postPlayerRequested,
  setSocket,
  logout
};