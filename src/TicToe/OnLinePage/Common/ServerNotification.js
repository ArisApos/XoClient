import React from 'react';

const ServerNotification = ({ identifier, requesting, message, success }) => {
  console.log('////////////=>useServerNotification', requesting, message, success);
    const Loader = requesting ? <div key='loader' className='loaderContainer'><div className='loader'></div></div> : null;
    const Message = message && !requesting ? <div key='message' className={ success? "response" : "response fail" }>{ message }</div> : null;   
    return { identifier, Loader, Message, success };
};

export { ServerNotification };