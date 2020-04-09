import React, { useState } from 'react';
import { Ranks, MyStatus, Registration, Loggin, LiveOverview } from './';
import { connect } from 'react-redux';
import './Static/controlPanel.scss';

//actionFuntions

//Component
const ControlPanel = ({ socketData, ranks, player, setPlayerLoggedIn_D, setPlayerStatus_D, loadPlayers_D }) => {
  const [ activeWindows, setActiveWindows ] = useState({registration:true,loggin:false});
  return (
    <section className="controlPanel">
      <Ranks ranks={ranks} />
      <section className="account">
        <MyStatus
          myStatus={player.loggedStatus.loggedIn ? player.status : null}
          setActiveWindows={setActiveWindows}
          setPlayerLoggedIn_D={setPlayerLoggedIn_D}
          setPlayerStatus_D={setPlayerStatus_D}
        />
        <Registration
          on={!player.loggedStatus.loggedIn && activeWindows.registration}
          setActiveWindows={setActiveWindows}
          setPlayerLoggedIn_D={setPlayerLoggedIn_D}
          setPlayerStatus_D={setPlayerStatus_D}
        />
        <Loggin
          on={!player.loggedStatus.loggedIn && activeWindows.loggin}
          setActiveWindows={ setActiveWindows }
          setPlayerLoggedIn_D={ setPlayerLoggedIn_D }
          setPlayerStatus_D={ setPlayerStatus_D }
          loadPlayers_D={ loadPlayers_D }
        />
      </section>
      <LiveOverview LiveOverview={null} />
    </section>
  );
};

//ReduxState&Dispatch
const stateControlPanel = ({ games }) => {
  return { };
};

const dispatchControlPanel = dispatch => ({});
const ControlPanelContainer = connect(
  stateControlPanel,
  dispatchControlPanel
)(ControlPanel);
export { ControlPanelContainer };