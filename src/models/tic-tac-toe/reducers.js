import { calculateWinner } from '../../libs'
import { ADD_SQUARE , CUT, CHANGE_STEP, CHANGE_XISNEXT, ADD_NEW_GAME, LOSE_POINTS } from './actions'

const gameSettingsState = (state = {}, action) => {
    switch (action.type) {
        case ADD_NEW_GAME:
            const { type, gameId, ...newGameSettings } = action;
            return newGameSettings;
        default:
            return state;
    }
}

const stepNumberState = (state = 0, action) => {
  switch (action.type) {
    case CHANGE_STEP:
      return action.step;
    default:
      return state;
  }
};

const xIsNextState = (state = true, action) => {
  switch (action.type) {
    case CHANGE_XISNEXT:
      return action.xTurn;
    default:
      return state;
  }
};

const squaresState = (state = Array(9).fill(null), action) => {
    switch (action.type){
        case ADD_SQUARE:
        state[action.index] = action.input
        return  state.slice();
    default: return state;
    }
}

const historyState = (state = [{ squares:squaresState(undefined, {}) }], action) => {
    switch (action.type) {
        case ADD_SQUARE:
            return [...state.slice(0, action.step + 1), {squares:squaresState(state[action.step].squares.slice(), action)}]
        case CUT:
            return [...state.slice(0, action.step + 1)]
        default: return state
    }
}

const scoreState = (state = { X: 0, O: 0 }, action) => {
      switch (action.type) {
        case LOSE_POINTS:
            return {...state, [action.playerXO]:state[action.playerXO]-action.points}
        default: return state
    }
};

const gameStatusState = (state = { 
    stepNumber: stepNumberState( undefined, {}),
    xIsNext: xIsNextState(undefined, {}), 
    history: historyState(undefined, {}), 
    score: scoreState(undefined, {}), 
    winnerResults: { winner: null, winnerLine: null } }, action ) => {
    switch (action.type) {
        case ADD_SQUARE:
            const history = historyState(state.history.slice(), action);
            const winnerResults = calculateWinner(history[history.length - 1].squares.slice());
            const score = winnerResults.winner ? { ...state.score, [winnerResults.winner]: state.score[winnerResults.winner] +1  } : { ...state.score }
            return {...state, history, score, winnerResults };
        case CUT:
            const history2 = historyState(state.history.slice(), action);
            const winnerResults2 = calculateWinner(history2[history2.length - 1].squares.slice());
            return { ...state, history:history2, winnerResults:winnerResults2 }
        case CHANGE_XISNEXT:
            return { ...state, xIsNext: xIsNextState(state.xIsNext, action) };
        case CHANGE_STEP:
            return { ...state, stepNumber: stepNumberState(state.stepNumber, action) }
        case ADD_NEW_GAME:
            return { ...state, gameSettings: gameSettingsState( {}, action) }
        case LOSE_POINTS:
            return { ...state, score: scoreState(state.score, action) }

        default: return state
    }
}

const games = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_GAME:
        const newGameInitialState = { [action.newGameId]: gameStatusState(undefined, action) };
      return { ...state, ...newGameInitialState };
    case ADD_SQUARE:
    case CUT:
    case CHANGE_XISNEXT:
    case CHANGE_STEP:
    case LOSE_POINTS:
      //Find gameState of the game who sends the action by gameId
      const activeGameStatus = state[action.gameId];
      //Parse the oldActiveGameStatusState and the action and get the new State
      const newActiveGameStatus = gameStatusState(activeGameStatus, action);
      //Overide only the specific game state
      return { ...state, [action.gameId]: newActiveGameStatus };
    default:
      return state;
  }
};

export { games };


