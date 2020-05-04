import React from 'react';
import { useStore } from 'react-redux';

const Game = () => {

 return <div className="game">
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

