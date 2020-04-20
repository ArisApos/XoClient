import React, { useState } from 'react';
import { Ranks, MyStatus, Registration, Loggin, LiveOverview } from './';
import './Static/controlPanel.scss';

//actionFuntions

//Component
const ControlPanel = ({ socketData, ranks, player, getPlayerRequested, postPlayerRequested, setPlayerLoggedStatus, setPlayerStatus }) => {
  const [ activeWindows, setActiveWindows ] = useState({registration:true,loggin:false});
  return (
    <section className="controlPanel">
      <Ranks ranks={ranks} />
      <section className="account">
        <MyStatus
          myStatus={player.loggedStatus.loggedIn ? player.status : null}
          setActiveWindows={setActiveWindows}
          setPlayerStatus={setPlayerStatus}
          setPlayerLoggedStatus={setPlayerLoggedStatus}
        />
        <Registration
          on={!player.loggedStatus.loggedIn && activeWindows.registration}
          setActiveWindows={setActiveWindows}
          postPlayerRequested={postPlayerRequested}
          getPlayerRequested={getPlayerRequested}
        />
        <Loggin
          on={!player.loggedStatus.loggedIn && activeWindows.loggin}
          setActiveWindows={setActiveWindows}
          getPlayerRequested={getPlayerRequested}
        />
      </section>
      <LiveOverview LiveOverview={null} />
    </section>
  );
};

export { ControlPanel };