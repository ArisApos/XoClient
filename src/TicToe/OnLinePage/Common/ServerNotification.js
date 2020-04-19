import React from 'react';
import { useSelector } from "react-redux";

const ServerNotification = () => {
  const { requesting, message, success } = useSelector(state=>state.online.serverNotification);
  console.log('////////////=>ServerNotification', requesting, message, success);
    const loaderContent = requesting ? <div key='loader' className='loaderContainer'><div className='loader'></div></div> : null;
    const messageContent = message && !requesting ? <div key='message' className={ success? "response" : "response fail" }>{ message }</div> : null;   
    return <> {[loaderContent, messageContent]} </>
};

export { ServerNotification };