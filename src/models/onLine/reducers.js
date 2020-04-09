import { SET_LOGGED_STATUS, SET_PLAYER_STATUS, SET_PLAYERS } from './actionTypes';

const loggedStatusState = (state={loggedIn:false, token:null }, action) => {
    switch(action.type) {
        case SET_LOGGED_STATUS:
            return {...state, loggedIn:action.loggedIn, token: action.token};
        default:
            return state;
    }
}

const statusState = (state={}, action) => {
    switch(action.type) {
        case SET_PLAYER_STATUS:
            return {...state, ...action.payload };
        default:
            return state;
    }
}

const playersState = (state=[], action) => {
    switch(action.type) {
        case SET_PLAYERS:
            return [...state, ...action.players];
        default:
            return state;
    }
}

const player = ( state = { 
    loggedStatus: loggedStatusState(undefined, {}),
    status: statusState(undefined, {}),
    players: playersState(undefined, {})
}, action) => {
    switch (action.type) {
      case SET_LOGGED_STATUS:
          let players = [];
          if(action.loggedIn) players = action.players;
        return { ...state, players, loggedStatus: loggedStatusState(state.loggedIn, action) };
      case SET_PLAYER_STATUS:
        return { ...state, status: statusState(state.status, action) };
      default:
        return state;
    }
}

export { player };