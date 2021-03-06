import { combineReducers } from 'redux';
import { SET_LOGGED_STATUS, SET_PLAYER_STATUS, SET_PLAYERS, SET_SERVER_NOTIFICATION, SET_SOCKET_DATA, UPDATE_PLAYERS_ONLINE, UPDATE_GAME } from './actionTypes';

const loggedStatus = (state={loggedIn:false, token:null }, action) => {
    switch(action.type) {
        case SET_LOGGED_STATUS:
            return {...state, loggedIn:action.loggedIn, token: action.token};
        default:
            return state;
    }
}

const status = (state={}, action) => {
    switch(action.type) {
        case SET_PLAYER_STATUS:
            return {...state, ...action.payload };
        default:
            return state;
    }
}

const socketData = (state={}, action) => {
    switch(action.type) {
        case SET_SOCKET_DATA:
            return {...state, ...action.socketData};
        default:
            return state;
    }
}

const players = (state={}, action) => {
    switch(action.type) {
        case SET_PLAYERS:
            if(action.clear) return {};
            return {...state, ...action.players};
        case UPDATE_PLAYERS_ONLINE:
            const newState = {...state};
            Object.keys(newState)
            .forEach(playerName=> newState[playerName].online= action.payload[playerName] ? true : false);         
            return newState;
        default:
            return state;
    }
}

const serverNotification = ( state={ requesting: null, message: null, success: null, utilities: {}}, action) => {
    switch(action.type) {
        case SET_SERVER_NOTIFICATION:
            const { requesting, utilities } = action;
            let {  message, success } = action;
            message = message !==null ? message : state.message;
            success = success !== null ? success : state.success;
            return { requesting, message, success, utilities };
        default:
            return state;
    }
}

const games = (state={}, action) => {
    switch(action.type) {
        case UPDATE_GAME: 
         console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>UPDATE_GAME', action);
         return {...state, ...action.payload};
        default:
            return state;
    }
}

// Old way
// const player = ( state = { 
//     loggedStatus: loggedStatusState(undefined, {}),
//     status: statusState(undefined, {})
// }, action) => {
//     switch (action.type) {
//       case SET_LOGGED_STATUS:
//         return { ...state, loggedStatus: loggedStatusState(state.loggedIn, action) };
//       case SET_PLAYER_STATUS:
//         return { ...state, status: statusState(state.status, action) };
//       default:
//         return state;
//     }
// }

const player = combineReducers({loggedStatus, status});
const online = combineReducers({ player, players, serverNotification, socketData, games });
export { online };