import { SET_PLAYER_LOGGED_IN, SET_PLAYER_STATUS } from './actions';

const loggedInState = (state=false, action) => {
    switch(action.type) {
        case SET_PLAYER_LOGGED_IN:
            return action.loggedIn;
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

const player = ( state = { 
    loggedIn: loggedInState(undefined, {}),
    status: statusState(undefined, {})
}, action) => {
    switch (action.type) {
      case SET_PLAYER_LOGGED_IN:
        return { ...state, loggedIn: loggedInState(state.loggedIn, action) };
      case SET_PLAYER_STATUS:
        return { ...state, status: statusState(state.status, action) };
      default:
        return state;
    }
}

export { player };