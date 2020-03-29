import React, { useState, useEffect  } from "react";
import { ControlPanelContainer } from "./ControlPanel";
import { } from "../../models/tic-tac-toe";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import './Static/onlinePage.scss';

//actionFunctions


//Component
const OnLinePage = ({ games }) => {
  const [socketData, setSocketData] = useState({
    endpoint: "http://127.0.0.1:5000",
    socket: null,
    connected: false,
    id: null
  });
  const [onlinePlayers, setOnlinePlayers] = useState(null);
  useEffect(() => {
    const socket = socketIOClient(socketData.endpoint);
    socket.on("sUpdatePlayers",({players})=>{
      console.log('Broaaaadcasstttted', players)
      setOnlinePlayers(players);
    });
    socket.on("sConnectionReply", ({id, connected, players}) => {
      console.log({id, connected, players });
      setSocketData({ ...socketData, socket, id, connected });
      socket.emit("cConnectionReply", {
        data: "Dude!!! This is awesome, from React Client"
      });
    });
  }, []);

  return (
    <section className="onLinePage">
      <ControlPanelContainer socket={socketData.socket} />
      {socketData.connected && (
        <div className="connectionIndecation">{socketData.id}</div>
      )}
      {onlinePlayers && (
        onlinePlayers.map(player=><div key={player.id}>{player.id}</div>)
      )}
    </section>
  );
};

//ReduxState&Dispatch
const stateOnLinePage = ({ games }) => {
  return { };
};

const dispatchOnLinePage = dispatch => ({});
const OnLinePageContainer = connect(
  stateOnLinePage,
  dispatchOnLinePage
)(OnLinePage);
export { OnLinePageContainer };
