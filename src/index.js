import React from 'react';
import ReactDOM from 'react-dom';
import './static/main.scss';
import { GamesContainer } from './TicToe/';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducers } from "./models/tic-tac-toe/";

const gameReducer = combineReducers(reducers),
      gameStore = createStore(gameReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


ReactDOM.render(
  <Provider store={gameStore}>
    <GamesContainer />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
