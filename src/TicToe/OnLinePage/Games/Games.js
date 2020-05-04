import React from "react";
import { useSelector } from "react-redux";
import { Game } from './Game';

const Games = () => {
    const { games } = useSelector(state=>({games:Object.values(state.online.games)}));
    const gamesEls = games.map(game=><Game/>);
    return (
      <div className="gamesContainer">
          {gamesEls}
      </div>
    );
};

export { Games };
