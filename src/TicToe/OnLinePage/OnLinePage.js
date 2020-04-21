import React, { useState, useEffect  } from "react";
import { ControlPanel } from "./ControlPanel";
import { getPlayerRequested, postPlayerRequested, setPlayerStatus, setPlayerLoggedStatus, setServerNotification } from "../../models/onLine";
import { ss, cs, ENTRY_POINT } from "../../models/onLine";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import './Static/onlinePage.scss';

//Component
const OnLinePage = ({ player, getPlayerRequested, postPlayerRequested,  setPlayerStatus, setPlayerLoggedStatus, serverNotification,setServerNotification }) => {
  const [socketData, setSocketData] = useState({ ss, cs, socket:null, connected: false, id: null });
  const [onlinePlayers, setOnlinePlayers] = useState(null);
  useEffect(() => {
    const socket = socketIOClient(ENTRY_POINT);
    socket.on(ss.root.CONNECTION_REPLY, ({ ss, cs, id, connected, players }) => {
      console.log({ss, cs, id, connected, players });
      setSocketData({ ...socketData, ss, cs, socket, id, connected });
      socket.emit(cs.root.CONNECTION_REPLY, {
        data: "Dude!!! React Client"
      });
    });
    socket.on(ss.root.UPDATE_PLAYERS,({players})=>{
      console.log('Broaaaadcasstttted', players)
      setOnlinePlayers(players);
    });

  }, []);

  return (
    <section className="onLinePage">
      <ControlPanel
        socketData={socketData}
        player={player}
        getPlayerRequested={getPlayerRequested}
        postPlayerRequested={postPlayerRequested}
        setPlayerStatus={setPlayerStatus}
        setPlayerLoggedStatus={setPlayerLoggedStatus}
        setServerNotification={setServerNotification}
      />
      {socketData.connected && (
        <div className="connectionIndecation">{socketData.id}</div>
      )}
      {onlinePlayers &&
        onlinePlayers.map((player) => <div key={player.id}>{player.id}</div>)}
    </section>
  );
};

//ReduxState&Dispatch
const stateOnLinePage = ({ online:{ player } }) => {
  return { player };
};
const OnLinePageContainer = connect(
  stateOnLinePage,
  {  setPlayerStatus, setPlayerLoggedStatus, setServerNotification, getPlayerRequested, postPlayerRequested }
)(OnLinePage);
export { OnLinePageContainer };
