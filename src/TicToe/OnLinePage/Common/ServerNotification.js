import React from 'react';
import { useSelector } from "react-redux";

const ServerNotification = () => {
  const { requesting, message, success } = useSelector(state=>state.online.serverNotification);
  console.log('////////////=>ServerNotification', requesting, message, success);
    const Loader = requesting ? <div key='loader' className='loaderContainer'><div className='loader'></div></div> : null;
    const Message = message && !requesting ? <div key='message' className={ success? "response" : "response fail" }>{ message }</div> : null;   
    return { Loader, Message, success };
};

export { ServerNotification };