import { GET_PLAYER_REQUESTED, POST_PLAYER_REQUESTED, LOGOUT } from './actionTypes';
import { setServerNotification,setPlayerStatus, setPlayerLoggedStatus, setPlayers, setSocket } from './actions';
import { select, call, put, takeLatest, take, all, fork } from 'redux-saga/effects';
import { axiosApi, indexing, createSocketConnection } from './libs';
import { watchSocketServer } from './sagaChannels';

// Worker, Wathcer getPlayer saga
function* getPlayer(action) {
    const { name, password, endpoint, method, utilities } = action;
    const data = { name, password };
    yield put(setServerNotification(true, null, null, utilities))
    try { 
      const  {message, token, status} = yield call(axiosApi, { method, endpoint, data });
      utilities.loggedIn = true;
      // get All players
      const [{ allPlayers }, socketData] = yield all([
          call(axiosApi, {method:'get', endpoint:'players', token}),
          call( createSocketConnection, name, password, token )
      ]);
      yield fork(watchSocketServer, socketData, {name,password, token});
      if(utilities.cb) utilities.cb();
      yield all([
          put(setServerNotification(false, message, true, utilities )),
          put(setPlayerLoggedStatus(true, token)),
          put(setPlayerStatus(status)),
          put(setPlayers(indexing('name',allPlayers))),
          put(setSocket(socketData))
      ]);
    }catch(err) {
    const { message } = err.response ? err.response.data : {message:'unknown error'};
    yield put(setServerNotification(false, message, false, utilities ));
    }
}

function* watchGetPlayer() {
    yield takeLatest( GET_PLAYER_REQUESTED, getPlayer);
}

// Worker, Wathcer postPlayer saga
function* postPlayer(action) {
    const { endpoint, data, method, utilities, headers } = action;
    console.log('****************PostPlayerWorker Action',action);
    yield put(setServerNotification(true, null, null, utilities))
    try {
        const { message } = yield call(axiosApi, {method, endpoint, data, headers});
       yield put(setServerNotification(false, message, true, {logginSuccess:true}));
    }catch(err) {
        const { message } = err.response.data;
        yield put(setServerNotification(false, message, false, utilities ));
    }
}

function* watchPostPlayer() {
    yield takeLatest( POST_PLAYER_REQUESTED, postPlayer);
}
      
      
function* logout() {
    while( yield take(LOGOUT) ){
        console.log("loggoutTriggeeerrreeeddd")
    const socketData = yield select(state=>state.online.socketData);
    socketData.socket.emit(socketData.cs.root.MANULLY_DISCONNECT);
        yield all([
            put(setPlayerLoggedStatus(false, null)),
            put(setPlayerStatus(null)),
            put(setServerNotification(null, "", null, null)),
            put(setPlayers({}, true))
        ])
    }
}

// RootSaga
function* rootSaga() {
  yield all([ watchGetPlayer(), watchPostPlayer(), logout()])
}

export { rootSaga };