import React, {} from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import { ENTRY_POINT } from '../../../models/onLine/libs';
import './Static/ranks.scss';


const Ranks = () => {
  const players = useSelector(state=>state.online.players, shallowEqual);

  const rankingPlayers = Object.values(players).map(({name, points, avatar}) => (
    <div key={name} className="rPlayer">
      <img className="avatar" src={ENTRY_POINT+avatar} alt={name}/>
      <span className="name">{name}</span>
      <span className="point">{points}</span>
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
