import { combineReducers } from 'redux';
import { SET_LOGGED_STATUS, SET_PLAYER_STATUS, SET_PLAYERS, SET_SERVER_NOTIFICATION } from './actionTypes';

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

const players = (state=[], action) => {
    switch(action.type) {
        case SET_PLAYERS:
            return [...state, ...action.players];
        default:
            return state;
    }
}

const serverNotification = ( state={ requesting: null, message: null, success: null, identifier: null}, action) => {
    switch(action.type) {
        case SET_SERVER_NOTIFICATION:
            const { requesting, identifier } = action;
            let {  message, success } = action;
            message = message !==null ? message : state.message;
            success = success !== null ? success : state.success;
            return { requesting, message, success, identifier };
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
const online = combineReducers({ player, players, serverNotification });
export { online };