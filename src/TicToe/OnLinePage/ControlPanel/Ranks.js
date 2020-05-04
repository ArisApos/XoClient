import React, {} from 'react';
import {useSelector} from 'react-redux';
import { ENTRY_POINT } from '../../../models/onLine/libs';
import './Static/ranks.scss';


const Ranks = () => {
  const { players, myPlayerName, games } = useSelector(state=>({players: state.online.players, myPlayerName:state.online.player.status.name, games: state.online.games}));
  const enemies= Object.keys(games).map(gameName=>gameName.split('-').find((name, index)=>name!==myPlayerName && index !== 2))
  const rankingPlayers = Object.values(players).map(({name, points, avatar, online}) => (
    <div key={name} className={enemies.find(enemy=>enemy===name) ?"rPlayer enemy":"rPlayer"}>
      <img className="avatar" src={ENTRY_POINT+avatar} alt={name}/>
      <span className="name">{name}</span>
      <span className="point">{points}</span>
      <span className={ online ? 'online on' : 'online' }></span>
    </div>
  ));
    return (
      <section className="ranks">
        <h3 className="title">Ranks</h3>
        {rankingPlayers}
      </section>
    );
}

export { Ranks };
