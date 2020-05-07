import React from "react";
import { useSelector } from "react-redux";
import { Game } from './Game';
import './static/games.scss'

const Games = () => {
    const { games } = useSelector(state=>({games:Object.values(state.online.games)}));
    const gamesEls = games.map(game=><Game key={game.name} {...game}/>);
    return (
      <div className="gamesContainer">
          {gamesEls}
      </div>
    );
};

export { Games };
