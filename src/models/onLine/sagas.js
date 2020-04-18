import { GET_PLAYER_REQUESTED } from './actionTypes';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { axiosApi } from './axiosApi';

// Worker, Wathcer getPlayer saga
function* getPlayer(action) {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@getPlayer', action);
    const { name, password, endpoint, method } = action;
    const data = { name, password };
    console.log('action llllllllllllllllll',data, endpoint, method)
    try {
      yield put({type:'SUCCESSSSSSSS', data, name, password, endpoint, method});    
    //   const player = yield call(axiosApi({ data, method, endpoint }));
    }catch(err) {
      yield put({type:'FAILLLLLLL'});
    }
}
function* watchGetPlayer(action) {
    console.log('watchGetPlayer', action);
    yield takeLatest( GET_PLAYER_REQUESTED, getPlayer);
}


// RootSaga
function* rootSaga() {
  yield all([ watchGetPlayer()])
}

export { rootSaga };