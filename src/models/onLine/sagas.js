import { call, put, takeLatest } from 'redux-saga/effects';
import { ENTRY_POINT } from "./";
import { axios } from 'axios';

// Worker saga
function* getPlayer(action){
    const { name, password } = action.payload;
    try {
      const player = yield call(axios.get)    
    } catch(err) {
        
    }
}