import React, {  } from "react";
import { ControlPanelContainer } from "./ControlPanel";
import { } from "../../models/tic-tac-toe";
import { connect } from "react-redux";
import './Static/onlinePage.scss';
//actionFunctions


//Component
const OnLinePage = ({ games }) => {
  
  return (
    <section className="onLinePage">
      <ControlPanelContainer />
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
