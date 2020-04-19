import { GET_PLAYER_REQUESTED } from './actionTypes';
import { setServerNotificatons,setPlayerStatus, setPlayerLoggedStatus, setPlayers } from './actions';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { axiosApi } from './axiosApi';

// Worker, Wathcer getPlayer saga
function* getPlayer(action) {
    const { name, password, endpoint, method, userLocation } = action;
    const data = { name, password };
    console.log(action)
    yield put(setServerNotificatons(true))
    try { 
      const  {message, authSuccess, token, status} = yield call(axiosApi, {data, method, endpoint });
      yield all([
          put(setServerNotificatons(false, message, authSuccess, userLocation )),
          put(setPlayerLoggedStatus(true, token)),
          put(setPlayerStatus(status))
      ]);
    }catch(err) {
    const { message } = err;
    yield put(setServerNotificatons(false, message, false ));
    }
}
function* watchGetPlayer() {
    yield takeLatest( GET_PLAYER_REQUESTED, getPlayer);
}


// RootSaga
function* rootSaga() {
  yield all([ watchGetPlayer()])
}

export { rootSaga };