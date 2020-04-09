import React, { useState } from 'react';
import { Ranks, MyStatus, Registration, Loggin, LiveOverview } from './';
import { connect } from 'react-redux';
import './Static/controlPanel.scss';

//actionFuntions

//Component
const ControlPanel = ({ socketData, ranks, player, setPlayerLoggedIn, setPlayerStatus, setPlayer }) => {
  const [ activeWindows, setActiveWindows ] = useState({registration:true,loggin:false});
  return (
    <section className="controlPanel">
      <Ranks ranks={ranks} />
      <section className="account">
        <MyStatus
          myStatus={player.loggedStatus.loggedIn ? player.status : null}
          setActiveWindows={setActiveWindows}
          setPlayerLoggedIn={setPlayerLoggedIn}
          setPlayerStatus={setPlayerStatus}
        />
        <Registration
          on={!player.loggedStatus.loggedIn && activeWindows.registration}
          setActiveWindows={setActiveWindows}
          setPlayerLoggedIn={setPlayerLoggedIn}
          setPlayerStatus={setPlayerStatus}
        />
        <Loggin
          on={!player.loggedStatus.loggedIn && activeWindows.loggin}
          setActiveWindows={ setActiveWindows }
          setPlayerLoggedIn={ setPlayerLoggedIn }
          setPlayerStatus={ setPlayerStatus }
          setPlayer={ setPlayer }
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