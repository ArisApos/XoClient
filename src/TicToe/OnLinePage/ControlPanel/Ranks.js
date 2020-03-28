import React, {} from 'react';
import './Static/ranks.scss';

const mockRanks = [
  {id:1, name: "aris", rank: "1", points: "35" },
  {id:2, name: "ninuk", rank: "2", points: "30" },
  {id:3, name: "makis", rank: "3", points: "25" },
  {id:4, name: "Gogo", rank: "4", points: "20" },
  {id:5, name: "thanos", rank: "5", points: "15" }
];


const Ranks = ({ranks=mockRanks}) => {
  const rankingPlayers = ranks.map(rPlayer => (
    <div key={rPlayer.id} className="rPlayer">
      <span className="rate">{rPlayer.rank}</span>
      <span className="name">{rPlayer.name}</span>
      <span className="point">{rPlayer.points}</span>
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
