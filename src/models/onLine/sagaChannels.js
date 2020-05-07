import { take, put, call, apply, delay, fork } from 'redux-saga/effects';
import { UPDATE_PLAYERS_ONLINE, UPDATE_GAME  } from '../../models/onLine/actionTypes'
import { createSocketConnection } from "../onLine/libs";
import { eventChannel } from 'redux-saga';

function createSocketChannel(socketData) {
  const { socket, ss, cs } = socketData;
  return eventChannel(emit => {
    const updatePlayers = ({onlinePlayers}) => {
      emit({ type: UPDATE_PLAYERS_ONLINE, payload: onlinePlayers });
    }
   async function createGame(nameSpace){
      console.log('>>>>>>>>>SAGA-------CREATE-SOCKET-CHANEL___createGame-from ss', nameSpace);
      const socketData = await createSocketConnection({nameSpace});
      socketData.ss = ss;
      socketData.cs = cs;
      emit({type: 'WATCH_SOCKET_GAME', payload: socketData})
    };
    socket.on(ss.root.UPDATE_PLAYERS, updatePlayers);
    socket.on(ss.root.CREATE_GAME, createGame);
    const unsubscribe = () => {
    }
    return unsubscribe;
  })
}

// function* pong(socket) {
//   yield apply(socket, socket.emit, ['pong']) // call `emit` as a method with `socket` as context
// }

function* watchSocketServer(socketData, {name, password, token}) {
    const socketChannel = yield call(createSocketChannel, socketData);
    socketData.socket.emit(socketData.cs.root.UPDATE_PLAYERS, {
    message:
        "Dude!!! I am a React Client IN SAGA CHANELL!! and i am connected to you!!!!Take my name,my password and my token",
    data: { name, password, token },
    });

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

//--------------GAME CHANNEL------------------------

function createSocketChannelGame(socketData) {
  const { socket, ss } = socketData;
  return eventChannel((emit) => {

    const updateGame = (game) => {
      console.log('>>>>>>>>>SAGA-------CREATE-SOCKET-CHANE-GAME___updateGame-from ss',game);
      for (var key in game) {
        game[key].socketData = socketData;
        break;
      }
      emit({ type: UPDATE_GAME, payload: game });
    };

    socket.on(ss.root.UPDATE_GAME, updateGame);
    const unsubscribe = () => {};
    return unsubscribe;
  });
}

// function* pong(socket) {
//   yield apply(socket, socket.emit, ['pong']) // call `emit` as a method with `socket` as context
// }

function* watchSocketServerGame(socketData) {

  const socketChannelGame = yield call(createSocketChannelGame, socketData);
  while (true) {
    try {
      const { type, payload } = yield take(socketChannelGame);
      yield put({ type, payload });
    } catch (err) {
      console.error("socket error:", err);
    }
  }
}



export { watchSocketServer, watchSocketServerGame };