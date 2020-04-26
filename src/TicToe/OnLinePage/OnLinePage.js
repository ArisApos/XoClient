import React, { useState, useEffect  } from "react";
import { ControlPanel } from "./ControlPanel";
import { getPlayerRequested, postPlayerRequested, setPlayerStatus, setPlayerLoggedStatus, setServerNotification, setPlayers } from "../../models/onLine";
import { connect } from "react-redux";
import './Static/onlinePage.scss';


//Component
const OnLinePage = ({ player, socketData, getPlayerRequested, postPlayerRequested,  setPlayerStatus, setPlayerLoggedStatus,setServerNotification, setPlayers }) => {

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
        setPlayers={setPlayers}
      />

      {/* {onlinePlayers.map((player) => <div key={player.id}>{player.id}</div>)} */}
    </section>
  );
};

//ReduxState&Dispatch
const stateOnLinePage = ({ online:{ player, socketData } }) => {
  return { player, socketData };
};
const OnLinePageContainer = connect(
  stateOnLinePage,
  {  setPlayerStatus, setPlayerLoggedStatus, setServerNotification, getPlayerRequested, postPlayerRequested, setPlayers }
)(OnLinePage);
export { OnLinePageContainer };
