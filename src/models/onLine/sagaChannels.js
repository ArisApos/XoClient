import { take, put, call, apply, delay, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { createSocketConnection } from './libs/sockets'

function createSocketChannel({socket, ss}) {

  return eventChannel(emit => {

    const updatePlayers = ({players}) => {
      emit({ type: ss.root.UPDATE_PLAYERS, payload: players });
    }
    socket.on(ss.root.UPDATE_PLAYERS, updatePlayers);
    const unsubscribe = () => {
    }
    return unsubscribe;
  })
}

// function* pong(socket) {
//   yield apply(socket, socket.emit, ['pong']) // call `emit` as a method with `socket` as context
// }

function* watchSocketServer(socketData) {

  const socketChannel = yield call(createSocketChannel, socketData);

  while (true) {
    try {
      const {type, payload} = yield take(socketChannel)
      yield put({ type, payload })
    //   yield fork(pong, socket)
    } catch(err) {
      console.error('socket error:', err)
      // socketChannel is still open in catch block
      // if we want end the socketChannel, we need close it explicitly
      // socketChannel.close()
    }
  }
}

export { watchSocketServer };