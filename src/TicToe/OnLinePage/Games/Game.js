import React from 'react';
import { useStore } from 'react-redux';

const Game = ({myName, player1Name, player2Name}) => {
  console.log(myName, player1Name, player2Name)
 return <div className="game">
   <div className='players'>
        <span className={player1Name === myName ? "player myPlayer":"player enemy"}>{player1Name}</span>
        <span className={player2Name === myName ? "player myPlayer":"player enemy"}>{player2Name}</span>
   </div>
    <div className="gameBoard">
      <div className="boardRow">
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>
      <div className="boardRow">
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>
      <div className="boardRow">
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>
    </div>
  </div>
};

export { Game };

