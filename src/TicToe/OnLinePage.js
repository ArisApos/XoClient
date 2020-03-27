import React, {  } from "react";
import { } from "./";
import { } from "../models/tic-tac-toe/";
import { connect } from "react-redux";
import './Static/onlinePage.scss';
//actionFunctions functions


//Component
const OnLinePage = ({ games }) => {
  
  return (
    <>
    <div className="onLinePage">OnLinePage</div>
    </>
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
