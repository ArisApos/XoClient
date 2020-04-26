import React, { useState } from 'react';
import { Ranks, MyStatus, Registration, Loggin, LiveOverview } from './';
import './Static/controlPanel.scss';

//actionFuntions

//Component
const ControlPanel = ({ socketData, ranks, player, getPlayerRequested, postPlayerRequested, setPlayerLoggedStatus, setPlayerStatus,setServerNotification, setPlayers }) => {
  const [ activeWindows, setActiveWindows ] = useState({registration:false, mountRegistration:false,loggin:true, mountLoggin:true});
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
          setPlayers={setPlayers}
          socketData={socketData}
        />
        {
        activeWindows.mountRegistration &&
        <Registration
          on={!player.loggedStatus.loggedIn && activeWindows.registration}
          setActiveWindows={setActiveWindows}
          postPlayerRequested={postPlayerRequested}
          getPlayerRequested={getPlayerRequested}
        />
        }
        {
        activeWindows.mountLoggin &&
        <Loggin
          on={!player.loggedStatus.loggedIn && activeWindows.loggin}
          setActiveWindows={setActiveWindows}
          getPlayerRequested={getPlayerRequested}
        />
        }
      </section>
      <LiveOverview LiveOverview={null} />
    </section>
  );
};

export { ControlPanel };