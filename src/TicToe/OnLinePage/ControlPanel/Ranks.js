import React, {} from 'react';
import './Static/ranks.scss';

const Ranks = ({ranks}) => {
    return (
      <section className="ranks">
        <h3 className="title">ranks</h3>
        <div className="rPlayer">
          <span className="rate">1</span>
          <span className="name">Chart Player1</span>
        </div>
        <div className="rPlayer">
          <span className="rate">2</span>
          <span className="name">Chart Player2</span>
        </div>
        <div className="rPlayer">
          <span className="rate">3</span>
          <span className="name">Chart Player3</span>
        </div>
      </section>
    );
}

export { Ranks };
