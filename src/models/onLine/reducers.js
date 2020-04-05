import { PLAYER_LOGGED_IN } from './actions';

const loggedInState = (state=false, action) => {
    switch(action.type) {
        case PLAYER_LOGGED_IN:
            return action.loggedIn;
        default:
            return state;
    }
}

const player = ( state = { 
    loggedIn: loggedInState(undefined, {}) 
}, action) => {
    switch(action.type) {
        case PLAYER_LOGGED_IN:
            return { ...state, loggedIn: loggedInState(state.loggedIn, action) };
        default:
            return state;
    }
}

export { player };