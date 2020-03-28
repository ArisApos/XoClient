import React, {  } from "react";
import { } from "./";
import { } from "../models/tic-tac-toe/";
import { connect } from "react-redux";
import './Static/onlinePage.scss';
//actionFunctions functions


//Component
const OnLinePage = ({ games }) => {
  
  return (
    <section className="onLinePage">
      <section className="controlPanel">
        <section className="charts">
          <h3 className="title">Charts</h3>
          <div className="cPlayer">
            <span className="rate">1</span>
            <span className="name">Chart Player1</span>
          </div>
          <div className="cPlayer">
            <span className="rate">2</span>
            <span className="name">Chart Player2</span>
          </div>
          <div className="cPlayer">
            <span className="rate">3</span>
            <span className="name">Chart Player3</span>
          </div>
        </section>
        <section className="myStatus">
          <h3 className="title">My Status</h3>
          <div className="statusItem opponents">Oponents</div>
          <div className="statusItem points">Points</div>
          <div className="statusItem availability">availability</div>
          <div className="statusItem playTime">playTime</div>
        </section>
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
      </section>
    </section>
  );
};

//ReduxState&Dispatch
const stateOnLinePage = ({ games }) => {
  return { };
};

const dispatchOnLinePage = dispatch => ({});
const OnLinePageContainer = connect(
  stateOnLinePage,
  dispatchOnLinePage
)(OnLinePage);
export { OnLinePageContainer };
