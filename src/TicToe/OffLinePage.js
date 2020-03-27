import React from "react";
import { GamesContainer } from "./";
import {} from "../models/tic-tac-toe/";
import { connect } from "react-redux";

//actionFunctions functions

//Component
const OffLinePage = ({ games }) => {
  return (
    <>
      <div className="offLinePage">
        <GamesContainer />
      </div>
    </>
  );
};

//ReduxState&Dispatch
const stateOffLinePage = ({ games }) => {
  return {};
};

const dispatchOffLinePage = dispatch => ({});
const OffLinePageContainer = connect(
  stateOffLinePage,
  dispatchOffLinePage
)(OffLinePage);
export { OffLinePageContainer };
