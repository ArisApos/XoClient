import React, { useState } from 'react';
import { Ranks, MyStatus, Registration, Loggin, LiveOverview } from './';
import './Static/controlPanel.scss';

//actionFuntions

//Component
const ControlPanel = ({ socketData, ranks, player, getPlayerRequested, postPlayerRequested, setPlayerLoggedStatus, setPlayerStatus,setServerNotification }) => {
  const [ activeWindows, setActiveWindows ] = useState({registration:false,loggin:true});

  return (
    <section className="controlPanel">
      <Ranks ranks={ranks} />
      <section className="account">
        <MyStatus
          myStatus={player.loggedStatus.loggedIn ? player.status : null}
          setActiveWindows={setActiveWindows}
          setPlayerStatus={setPlayerStatus}
          setPlayerLoggedStatus={setPlayerLoggedStatus}
          setServerNotification={setServerNotification}
        />
        <Registration
          on={!player.loggedStatus.loggedIn && activeWindows.registration}
          setActiveWindows={setActiveWindows}
          postPlayerRequested={postPlayerRequested}
          getPlayerRequested={getPlayerRequested}
          setServerNotification={setServerNotification}
        />
        <Loggin
          on={!player.loggedStatus.loggedIn && activeWindows.loggin}
          setActiveWindows={setActiveWindows}
          getPlayerRequested={getPlayerRequested}
          setServerNotification={setServerNotification}
        />
      </section>
      <LiveOverview LiveOverview={null} />
    </section>
  );
};

export { ControlPanel };