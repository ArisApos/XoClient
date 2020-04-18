import React from 'react';
import { connect } from "react-redux";

let ServerNotifications = ({ serverNotifications:{ requesting, message, success } }) => {
    const loaderContent = requesting ? <div className='loaderContainer'><div className='loader'></div></div> : null;
    const messageContent = message && !requesting ? <div className={ success? "response" : "response fail" }>{ message }</div> : null;   
    return { loaderContent, messageContent, success };
};

// ReduxState&Dispatch
const stateServerNotifications = ({ serverNotifications }) => {
  return { serverNotifications };
};

ServerNotifications = connect(stateServerNotifications)(ServerNotifications);
export { ServerNotifications };