import React, {} from 'react';
import './Static/myStatus.scss';

const MyStatus = ({myStatus}) => {
    return (
      <section className="myStatus">
        <h3 className="title">LoggedInStatus</h3>
        <div className="statusItem opponents">Oponents</div>
        <div className="statusItem points">Points</div>
        <div className="statusItem availability">availability</div>
        <div className="statusItem playTime">playTime</div>
      </section>
    );   
}

export { MyStatus }; 