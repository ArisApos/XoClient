import React from "react";

const scoreAnimation = nodeHeader => {
  nodeHeader.classList.add("scoreRotation");
  setTimeout(() => nodeHeader.classList.remove("scoreRotation"), 2000);
};

let TotalScore = ( { playerXName, playerOName, winner, score } ) => {
 return <div className="totalScore">
          <span className="headerName">{playerXName}</span>
          <span className="headerName">{playerOName}</span>
          <span className="header">X</span>
          <span className="header">O</span>
          <span className="xi" ref={nodeEl => {
              if (winner === "X" && nodeEl) {
                scoreAnimation(nodeEl);
              }}}>
            {score.X}
          </span>
          <span className="omikron" ref={nodeEl => {
              if (winner === "O" && nodeEl) {
                scoreAnimation(nodeEl);
              }}}>
            {score.O}
          </span>
        </div>;
}

TotalScore = React.memo(TotalScore);

export { TotalScore };