import React from "react";
import { useSelector } from "react-redux";
import { Game } from './Game';
import './static/games.scss'

const Games = () => {
    const { games, socketData } = useSelector(state=>({games:Object.values(state.online.games),socketData:state.online.socketData}));
    const gamesEls = games.map(game=><Game key={game.name} game={{...game}} socketData={{...socketData}}/>);
    return (
      <div className="gamesContainer">
          {gamesEls}
      </div>
    );
};

export { Games };
