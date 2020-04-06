import { SET_LOGGED_STATUS, SET_PLAYER_STATUS } from './actions';

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

const player = ( state = { 
    loggedStatus: loggedStatusState(undefined, {}),
    status: statusState(undefined, {})
}, action) => {
    switch (action.type) {
      case SET_LOGGED_STATUS:
        return { ...state, loggedIn: loggedStatusState(state.loggedIn, action) };
      case SET_PLAYER_STATUS:
        return { ...state, status: statusState(state.status, action) };
      default:
        return state;
    }
}

export { player };