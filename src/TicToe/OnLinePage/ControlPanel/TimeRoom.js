import React from 'react';
const TimeRoom = (roomPlayers) => {
    const tPlayers = roomPlayers.map(({name})=><div key={name} className="tPlayer">{name}</div>)
 return <div key={roomPlayers[0].maxTime} className="timeRoom">
    <div className="timeLimit">{roomPlayers[0].maxTime}</div>
    { tPlayers }
  </div>;
};
export { TimeRoom };