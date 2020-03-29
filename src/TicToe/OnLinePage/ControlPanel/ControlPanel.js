import React, {  } from 'react';
import { Ranks, MyStatus, Registration, LiveOverview } from './';
import { connect } from 'react-redux';
import './Static/controlPanel.scss';

//actionFuntions

//Component
const ControlPanel = ({socketData, ranks, myStatus, liveOverview}) => {
  
  return (
    <section className="controlPanel">
      <Ranks ranks={ ranks } />
      <section className="account">
        <MyStatus mySatus={ null } />
        <Registration isLoggedIn={ null } socketData={ socketData } />
      </section>
      <LiveOverview LiveOverview={ null } />
    </section>
  );
};

//ReduxState&Dispatch
const stateControlPanel = ({ games }) => {
  return { };
};

const dispatchControlPanel = dispatch => ({});
const ControlPanelContainer = connect(
  stateControlPanel,
  dispatchControlPanel
)(ControlPanel);
export { ControlPanelContainer };