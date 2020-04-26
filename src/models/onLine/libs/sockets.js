import socketIOClient from "socket.io-client";

const ENTRY_POINT = "http://127.0.0.1:5000";

const createSocketConnection = async ()=>{
  // const socket = socketIOClient(ENTRY_POINT);
  const socket = socketIOClient(ENTRY_POINT);
  return await new Promise((resolve)=>{
      socket.on("connection", (socketData) => {
        socketData.socket = socket;
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SOCKET CONNECTION,socketData", socketData);
        resolve(socketData)
      });
  });
}

export { ENTRY_POINT, createSocketConnection };