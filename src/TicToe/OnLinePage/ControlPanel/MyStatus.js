import React, {} from 'react';
import { ENTRY_POINT } from "../../../models/onLine";
import './Static/myStatus.scss';

const MyStatus = ({myStatus, setActiveWindows, setPlayerLoggedIn_D, setPlayerStatus_D}) => {
    const loggedOut = ()=> {
      setActiveWindows({ registration: false, loggin: true });
      setPlayerLoggedIn_D(false, null)
      setPlayerStatus_D(null);
    }
  if(myStatus) {
    const {name, avatar, points, maxPlayers, maxTime,} = myStatus;
        return (
          <section className="myStatus">
            <h3 className="title">LoggedInStatus</h3>
            <div className="statusItem person">
              <div className="name">{name}</div>
              <img src={ENTRY_POINT + avatar} alt="avatar" className="avatar" />
            </div>
            <div className="statusItem points">{`points: ${points}`}</div>
            <div className="statusItem maxTime">{`maxTime: ${maxTime}`}</div>
            <div className="statusItem maxPlayers">{`maxPlayers: ${maxPlayers}`}</div>
            <div className="loggedOut" onClick={loggedOut}>loggedOut</div>
          </section>
        ); 
  }
  return <div>NOT LOGGEDin, GO AWAY</div>;
}

export { MyStatus }; 