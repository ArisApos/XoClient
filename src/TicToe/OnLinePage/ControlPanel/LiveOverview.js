import React from "react";
import { useSelector } from "react-redux";
import groupBy from "lodash/groupBy";
import { TimeRoom } from './TimeRoom';
import './Static/liveOverview.scss';

const LiveOverview = () => {
  const players = useSelector((state) => state.online.players);
  const onlinePlayers = Object.values(players).reduce((acc,player)=>player.online ? [...acc, player]:acc,[]);
  const groupByMaxTimePlayers = groupBy(onlinePlayers, ({maxTime})=>maxTime);
  const timeRooms = Object.values(groupByMaxTimePlayers).reduce(
    (acc, roomPlayers) => [...acc, TimeRoom(roomPlayers)],
    []
  );
  return  <section className="liveOverview">
      <h3 className="title">Live Overview</h3>
      <div className="status options">
        Total active players, options, others
      </div>
      <div className="timeRooms">
        { timeRooms }
      </div>
    </section>
};

export { LiveOverview };
