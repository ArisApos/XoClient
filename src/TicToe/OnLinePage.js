import React, {  } from "react";
import { } from "./";
import { } from "../models/tic-tac-toe/";
import { connect } from "react-redux";
import './Static/onlinePage.scss';
//actionFunctions functions


//Component
const OnLinePage = ({ games }) => {
  
  return (
    <div className="onLinePage">
      <div className="controlPanel">
        <div className="charts">
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
        </div>
        <div className="mainContent">
          <div className="status options">
            Total active players, options, others
          </div>
          <div className="timeRooms">
            <div className="timeRoom">
              <div className="timeLimit">timeLimit</div>
              <div className="tPlayer">Status Player1</div>
              <div className="tPlayer">Status Player2</div>
              <div className="tPlayer">Status Player3</div>
            </div>
            <div className="timeRoom">
              <div className="timeLimit">timeLimit</div>
              <div className="tPlayer">Status Player1</div>
              <div className="tPlayer">Status Player2</div>
              <div className="tPlayer">Status Player3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
