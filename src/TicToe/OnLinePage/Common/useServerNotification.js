import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import { useDispatch } from "react-redux";
import { setServerNotification } from '../../../models/onLine/actions'

const useServerNotification = () => {
  const { utilities, requesting, message, success } = useSelector(state=>state.online.serverNotification, shallowEqual);
  const dispatch = useDispatch();
  const setServerNotificationD = (requesting, message, success, utilities) => dispatch(setServerNotification(requesting, message, success, utilities));
  console.log('////////////=>useServerNotification', requesting, message, success);
    const Loader = requesting ? <div key='loader' className='loaderContainer'><div className='loader'></div></div> : null;
    const Message = message && !requesting ? <div key='message' className={ success? "response" : "response fail" }>{ message }</div> : null;   
    return { utilities, Loader, Message, success, setServerNotificationD };
};

export { useServerNotification };