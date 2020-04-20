import React from 'react';
import { useSelector, shallowEqual } from "react-redux";

const ServerNotification = () => {
  const { identifier, requesting, message, success } = useSelector(state=>state.online.serverNotification, shallowEqual);
  console.log('////////////=>ServerNotification', requesting, message, success);
    const Loader = requesting ? <div key='loader' className='loaderContainer'><div className='loader'></div></div> : null;
    const Message = message && !requesting ? <div key='message' className={ success? "response" : "response fail" }>{ message }</div> : null;   
    return { identifier, Loader, Message, success };
};

export { ServerNotification };