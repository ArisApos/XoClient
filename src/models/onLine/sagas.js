import { GET_PLAYER_REQUESTED, POST_PLAYER_REQUESTED } from './actionTypes';
import { setServerNotification,setPlayerStatus, setPlayerLoggedStatus, setPlayers } from './actions';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { axiosApi } from './axiosApi';

// Worker, Wathcer getPlayer saga
function* getPlayer(action) {
    const { name, password, endpoint, method, identifier } = action;
    const data = { name, password };
    yield put(setServerNotification(true, null, null, identifier))
    try { 
      const  {message, token, status} = yield call(axiosApi, { method, endpoint, data });
      identifier.loggedIn = true;
      if(identifier.cb) identifier.cb();
      yield all([
          put(setServerNotification(false, message, true, identifier )),
          put(setPlayerLoggedStatus(true, token)),
          put(setPlayerStatus(status))
      ]);
    }catch(err) {
    const { message } = err.response.data;
    yield put(setServerNotification(false, message, false, identifier ));
    }
}

function* watchGetPlayer() {
    yield takeLatest( GET_PLAYER_REQUESTED, getPlayer);
}

// Worker, Wathcer postPlayer saga
function* postPlayer(action) {
    const { endpoint, data, method, identifier, headers } = action;
    console.log('****************PostPlayerWorker Action',action);
    yield put(setServerNotification(true, null, null, identifier))
    try {
        const { message } = yield call(axiosApi, {method, endpoint, data, headers});
       yield put(setServerNotification(false, message, true, {logginSuccess:true}));
    }catch(err) {
        const { message } = err.response.data;
        yield put(setServerNotification(false, message, false, identifier ));
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