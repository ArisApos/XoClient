import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createGame } from '../../../models/onLine/actions';
import groupBy from "lodash/groupBy";
import { TimeRoom } from './TimeRoom';
import './Static/liveOverview.scss';

const LiveOverview = () => {
  const { players, myPlayerName, games } = useSelector(state => ({ players: state.online.players, games: state.online.games, myPlayerName: state.online.player.status.name}));
  const dispatch = useDispatch();
  const enemies = Object.values(games).map(({ enemyName }) => enemyName);
  const onlinePlayers = Object.values(players).reduce((acc,player)=>player.online && player.name !== myPlayerName ? [...acc, player]:acc,[]);
  const groupByMaxTimePlayers = groupBy(onlinePlayers, ({maxTime})=>maxTime);
  const onClickPlayer = (e)=> dispatch(createGame({player1: myPlayerName, player2:e.target.getAttribute('data-key')}));
  const timeRooms = Object.values(groupByMaxTimePlayers).reduce(
    (acc, roomPlayers) => [...acc, TimeRoom(roomPlayers, onClickPlayer, enemies)],
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
