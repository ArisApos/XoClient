import React, {} from 'react';
import './Static/ranks.scss';

const mockRanks = [
  { name: "aris", rank: "1", points: "35" },
  { name: "ninuk", rank: "2", points: "30" },
  { name: "makis", rank: "3", points: "25" },
  { name: "Gogo", rank: "4", points: "20" },
  { name: "thanos", rank: "5", points: "15" }
];


const Ranks = ({ranks=mockRanks}) => {
  const rankingPlayers = ranks.map(rPlayer => (
    <div className="rPlayer">
      <span className="rate">{rPlayer.rank}</span>
      <span className="name">{rPlayer.name}</span>
      <span className="point">{rPlayer.points}</span>
    </div>
  ));
    return (
      <section className="ranks">
       { rankingPlayers }
      </section>
    );
}

export { Ranks };
