import socketIOClient from 'socket.io-client';

const ENTRY_POINT = 'http://164.90.222.66';

const createSocketConnection = async ({ nameSpace }) => {
  const url = nameSpace ? ENTRY_POINT + nameSpace : ENTRY_POINT;
  console.log('>>>>>>>>>>>>>>>>>>>>>>>createSocketConnection  url', url);
  const socket = socketIOClient(url);
  return await new Promise((resolve) => {
    socket.on('connection', (socketData) => {
      socketData.socket = socket;
      console.log(
        '>>>>>>>>>>>>>>>>>>>>>>>>SERVER!!!!! SOCKET CONNECTION to url,NameSsocketData',
        url,
        socketData
      );
      resolve(socketData);
    });
  });
};

export { ENTRY_POINT, createSocketConnection };
