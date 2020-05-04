import React, { useState, useEffect  } from "react";
import { connect } from "react-redux";
import { ControlPanel } from "./ControlPanel";
import { Games } from './Games';
import { getPlayerRequested, postPlayerRequested, logout } from "../../models/onLine";
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
      <Games />
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
