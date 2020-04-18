import React from 'react';
import { connect } from "react-redux";

let ServerNotification = ({ serverNotification:{ requesting, message, success } }) => {
    const loaderContent = requesting ? <div className='loaderContainer'><div className='loader'></div></div> : null;
    const messageContent = message && !requesting ? <div className={ success? "response" : "response fail" }>{ message }</div> : null;   
    return { loaderContent, messageContent, success };
};

// ReduxState&Dispatch
const stateServerNotification = ({ serverNotification }) => {
  return { serverNotification };
};

ServerNotification = connect(stateServerNotification)(ServerNotification);
export { ServerNotification };