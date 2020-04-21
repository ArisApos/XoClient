import { GET_PLAYER_REQUESTED, POST_PLAYER_REQUESTED } from './actionTypes';
import { setServerNotificatons,setPlayerStatus, setPlayerLoggedStatus, setPlayers } from './actions';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { axiosApi } from './axiosApi';

// Worker, Wathcer getPlayer saga
function* getPlayer(action) {
    const { name, password, endpoint, method, identifier } = action;
    const data = { name, password };
    yield put(setServerNotificatons(true, null, null, identifier))
    try { 
      const  {message, token, status} = yield call(axiosApi, { method, endpoint, data });
      identifier.loggedIn = true;
      yield all([
          put(setServerNotificatons(false, message, true, identifier )),
          put(setPlayerLoggedStatus(true, token)),
          put(setPlayerStatus(status))
      ]);
    }catch(err) {
    const { message } = err;
    yield put(setServerNotificatons(false, message, false, identifier ));
    }
}

function* watchGetPlayer() {
    yield takeLatest( GET_PLAYER_REQUESTED, getPlayer);
}

// Worker, Wathcer postPlayer saga
function* postPlayer(action) {
    const { endpoint, data, method, identifier, headers } = action;
    console.log('****************PostPlayerWorker Action',action);
    yield put(setServerNotificatons(true, null, null, identifier))
    try {
        const { message } = yield call(axiosApi, {method, endpoint, data, headers});
       yield put(setServerNotificatons(false, message, true, identifier));
    }catch(err) {
        const { message } = err;
        yield put(setServerNotificatons(false, message, false, identifier ));
    }
}

function* watchPostPlayer() {
    yield takeLatest( POST_PLAYER_REQUESTED, postPlayer);
}



// RootSaga
function* rootSaga() {
  yield all([ watchGetPlayer(), watchPostPlayer()])
}

export { rootSaga };