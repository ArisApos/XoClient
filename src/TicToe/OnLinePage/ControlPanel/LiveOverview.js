import React from "react";
import './Static/liveOverview.scss';

const LiveOverview = ({ liveOverview }) => {
  return (
    <section className="liveOverview">
      <h3 className="title">Live Overview</h3>
      <div className="status options">
        Total active players, options, others
      </div>
      <div className="timeRooms">
        <div className="timeRoom">
          <div className="timeLimit">timeLimit7-10</div>
          <div className="tPlayer">Status Player1</div>
          <div className="tPlayer">Status Player2</div>
          <div className="tPlayer">Status Player3</div>
        </div>
        <div className="timeRoom">
          <div className="timeLimit">timeLimit5-7</div>
          <div className="tPlayer">Status Player1</div>
          <div className="tPlayer">Status Player2</div>
          <div className="tPlayer">Status Player3</div>
        </div>
        <div className="timeRoom">
          <div className="timeLimit">timeLimit3-5</div>
          <div className="tPlayer">Status Player1</div>
          <div className="tPlayer">Status Player2</div>
          <div className="tPlayer">Status Player3</div>
        </div>
        <div className="timeRoom">
          <div className="timeLimit">timeLimit1-3</div>
          <div className="tPlayer">Status Player1</div>
          <div className="tPlayer">Status Player2</div>
          <div className="tPlayer">Status Player3</div>
        </div>
      </div>
    </section>
  );
};

export { LiveOverview };
