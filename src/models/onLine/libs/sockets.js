import socketIOClient from "socket.io-client";

const ENTRY_POINT = "http://127.0.0.1:5000";
const ss = {
  root: {
    NAME: "/",
    UPDATE_PLAYERS: "UPDATE_PLAYERS",
    CONNECTION_REPLY: "CONNECTION_REPLY",
  }
};
// Client Name Spaces with Events
const cs = {
  root: {
    NAME: "/",
    CONNECTION_REPLY: "CONNECTION_REPLY",
  }
};
const createSocketConnection = async (name,password,token)=>{
  // const socket = socketIOClient(ENTRY_POINT);
  const socket = socketIOClient(ENTRY_POINT);
  return await new Promise((resolve)=>{
      socket.on(ss.root.CONNECTION_REPLY, (socketData) => {
        socketData.socket = socket;
        console.log(">>>>>>>SOCKET CONNECTION,socketData", socketData);
        socket.emit(cs.root.CONNECTION_REPLY, {
          message:
            "Dude!!! I am a React Client and i am connected to you!!!!Take my name,my password and my token",
          data: { name, password, token },
        });
        resolve(socketData)
      });
  });
}

export { ss, cs, ENTRY_POINT, createSocketConnection };