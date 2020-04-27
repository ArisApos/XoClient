import React, { useState, useEffect  } from "react";
import { ControlPanel } from "./ControlPanel";
import { getPlayerRequested, postPlayerRequested, logout } from "../../models/onLine";
import { connect } from "react-redux";
import './Static/onlinePage.scss';


//Component
const OnLinePage = ({ player, getPlayerRequested, postPlayerRequested, logout }) => {
  return (
    <section className="onLinePage">
      <ControlPanel
        player={player}
        getPlayerRequested={getPlayerRequested}
        postPlayerRequested={postPlayerRequested}
        logout={logout}
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
  { getPlayerRequested, postPlayerRequested, logout }
)(OnLinePage);
export { OnLinePageContainer };
