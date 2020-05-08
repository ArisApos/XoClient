import React from 'react';


const Game = ({myName, player1Name, player2Name, squares, turn, nameSpace, socketData, winnerData:{ winner, winnerLine }}) => {
  const onClickSquare = (e)=>{
    if(myName !== turn || e.target.innerText || winner) return;
    e.target.classList.add('mySquare')
    const squareIndex = e.target.getAttribute("data-squareindex");
    socketData.socket.emit(socketData.cs.root.UPDATE_GAME,{squareIndex})
  }
  let firstPlayerClassName = player1Name === myName ? "player myPlayer" : "player enemy";
  firstPlayerClassName += turn === player1Name ? " turn" : ""; 
  let secondPlayerClassName = player2Name === myName ? "player myPlayer" : "player enemy";
  secondPlayerClassName += turn === player2Name ? " turn" : ""; 
  const playerState = winner ? winner === myName ? 'won' : 'lost' : '';
 return (
  <div className={"game "+playerState}>
     <div className="players">
       <span
         className={firstPlayerClassName}
       >
         {player1Name}
       </span>
       <span
         className={secondPlayerClassName}
       >
         {player2Name}
       </span>
     </div>
     <div className="gameBoard">
       <div className="boardRow">
         <button className={winnerLine !==null ? winnerLine.find(squareIndex=>squareIndex === 0) ?
            "squareW squareA square " + playerState : "squareA square" :"square"} data-squareindex='0' onClick={onClickSquare}>
            {squares[0]}
          </button>
          <button className={winnerLine ? winnerLine.find(squareIndex=>squareIndex === 1) ?
            "squareW squareA square " + playerState : "squareA square" :"square"} data-squareindex='1' onClick={onClickSquare}>
            {squares[1]}
          </button>
          <button className={winnerLine ? winnerLine.find(squareIndex=>squareIndex === 2) ?
            "squareW squareA square " + playerState : "squareA square" :"square"} data-squareindex='2' onClick={onClickSquare}>
            {squares[2]}
          </button>
       </div>
       <div className="boardRow">
          <button className={winnerLine ? winnerLine.find(squareIndex=>squareIndex === 3) ?
            "squareW squareA square " + playerState : "squareA square" :"square"} data-squareindex='3' onClick={onClickSquare}>
            {squares[3]}
          </button>
          <button className={winnerLine ? winnerLine.find(squareIndex=>squareIndex === 4) ?
            "squareW squareA square " + playerState : "squareA square" :"square"} data-squareindex='4' onClick={onClickSquare}>
            {squares[4]}
          </button>
          <button className={winnerLine ? winnerLine.find(squareIndex=>squareIndex === 5) ?
            "squareW squareA square " + playerState : "squareA square" :"square"} data-squareindex='5' onClick={onClickSquare}>
            {squares[5]}
          </button>
       </div>
       <div className="boardRow">
          <button className={winnerLine ? winnerLine.find(squareIndex=>squareIndex === 6) ?
            "squareW squareA square " + playerState : "squareA square" :"square"} data-squareindex='6' onClick={onClickSquare}>
            {squares[6]}
          </button>
          <button className={winnerLine ? winnerLine.find(squareIndex=>squareIndex === 7) ?
            "squareW squareA square " + playerState : "squareA square" :"square"} data-squareindex='7' onClick={onClickSquare}>
            {squares[7]}
          </button>
          <button className={winnerLine ? winnerLine.find(squareIndex=>squareIndex === 8) ?
            "squareW squareA square " + playerState : "squareA square" :"square"} data-squareindex='8' onClick={onClickSquare}>
            {squares[8]}
          </button>
       </div>
     </div>
   </div>
 );
};

export { Game };

