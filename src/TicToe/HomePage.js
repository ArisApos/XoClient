import React, { useState } from 'react';
import { OffLinePageContainer, OnLinePageContainer } from './';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function HomePageContainer() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <nav className="modes">
            <Link className="modeLink" to="/offLine">OffLineMode</Link>
            <Link className="modeLink" to="/onLine">onLineMode</Link>
          </nav>
        </Route>
        <Route exact path="/offLine">
          <OffLinePageContainer />
        </Route>
        <Route path="/onLine" component={OnLinePageContainer}>
          <OnLinePageContainer />
        </Route>
      </Switch>
    </Router>
  );
}



export { HomePageContainer };