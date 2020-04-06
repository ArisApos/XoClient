import React, {} from 'react';
import { ENTRY_POINT } from "../../../models/onLine";
import './Static/myStatus.scss';

const MyStatus = ({myStatus}) => {
  if(myStatus) {
    const {name, avatar, points, maxPlayers, maxTime} = myStatus;
        return (
          <section className="myStatus">
            <h3 className="title">LoggedInStatus</h3>
            <div className="statusItem person">
              <div className="name">{name}</div>
              <img
                src={ENTRY_POINT + avatar}
                alt="avatar"
                className="avatar"
              />
            </div>
            <div className="statusItem points">{points}</div>
            <div className="statusItem maxTime">{maxPlayers}</div>
            <div className="statusItem maxPlayers">{maxTime}</div>
          </section>
        ); 
  }
  return <div>NOT LOGGEDin, GO AWAY</div>  
}

export { MyStatus }; 