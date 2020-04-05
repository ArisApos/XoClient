import React from 'react';
import ReactDOM from 'react-dom';
import './static/main.scss';
import { HomePageContainer } from './TicToe/';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { games } from "./models/tic-tac-toe/";
import { player } from "./models/onLine/";

const fullReducer = combineReducers( { player, games }),
      gameStore = createStore(fullReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


ReactDOM.render(
  <Provider store={gameStore}>
    <HomePageContainer />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
