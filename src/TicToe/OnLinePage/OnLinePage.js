import React, { useState, useEffect  } from "react";
import { ControlPanelContainer } from "./ControlPanel";
import { setPlayerLoggedIn_A, setPlayerStatus_A } from "../../models/onLine";
import { ss, cs, ENTRY_POINT } from "../../models/onLine";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import './Static/onlinePage.scss';

//Component
const OnLinePage = ({ player, setPlayerLoggedIn_D, setPlayerStatus_D }) => {
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
      <ControlPanelContainer
        socketData={socketData}
        player={player}
        setPlayerLoggedIn_D={setPlayerLoggedIn_D}
        setPlayerStatus_D={setPlayerStatus_D}
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
const stateOnLinePage = ({ player }) => {
  return { player };
};

const dispatchOnLinePage = (dispatch) => ({
  setPlayerLoggedIn_D: (loggedIn, token)=>{ dispatch(setPlayerLoggedIn_A(loggedIn, token)); },
  setPlayerStatus_D: (payload)=>{ dispatch(setPlayerStatus_A(payload)); }
});

const OnLinePageContainer = connect(
  stateOnLinePage,
  dispatchOnLinePage
)(OnLinePage);
export { OnLinePageContainer };
