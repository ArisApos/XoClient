import React from "react";

const GameInfo = ({gameId, historyLength, stepNumber, cutDis, timeTravelDis, winner, xIsNext })=> {
        const moves = historyLength.map((nullEl, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return <li key={move}>
            <button
                ref={nodeEl => {
                    if (move === stepNumber && nodeEl) {
                        nodeEl.style.zIndex = 1
                            setTimeout(function () {
                                nodeEl.style.transform = "translate(0,10px)";
                                nodeEl.style.zIndex = 0;
                            }, 100)         
                    }
                }}
                className={stepNumber === move ? 'travel current' : 'travel'}
                onClick={() => { cutDis(gameId, move); }} onMouseEnter={() => timeTravelDis(gameId, move)}>
                {desc}
            </button>
        </li>;
    });
    let status = winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O");

    return <div className="gameInfo">
              <div className={winner ? "status winner" : "status"}>
                {status}
              </div>
              <ol>{moves}</ol>
            </div>;

}

export { GameInfo }