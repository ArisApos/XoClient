import React from 'react';
import ReactDOM from 'react-dom';
import './static/main.scss';
import { HomePageContainer } from './TicToe/';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { games } from "./models/tic-tac-toe/";
import { online, rootSaga } from "./models/onLine/";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const fullReducer = combineReducers({ online, games });
const gameStore = createStore(
    fullReducer,
    compose(
     applyMiddleware(sagaMiddleware),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
sagaMiddleware.run(rootSaga);

gameStore.dispatch({ type: "GET_PLAYER_REQUESTED", name: 'aris', password: '123', endpoint:'players', method:'get' });

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
