import React, { useState, useEffect } from "react";
import { batch } from 'react-redux';
import { useForm } from "react-hook-form";
import axios from "axios";
import { ENTRY_POINT } from "../../../models/onLine";
import "./Static/loggin.scss";


const Loggin = ({ on, setActiveWindows, setPlayerLoggedIn_D, setPlayerStatus_D }) => {

  const [responseData, setResponseData] = useState({ response: false });
  const goRegistration = ()=>setActiveWindows({registration:true, loggin: false});
  useEffect(() => {}, []);

  const { register, handleSubmit } = useForm(); // initialise the hook
  const deactivateBoth = ()=>setActiveWindows({ registration: false, loggin: false });
  const onSubmit = data => {
    console.log(data);
    const { name, password } = data;
    const encodedPassword = encodeURIComponent(password);
    const encodedUri = `${ENTRY_POINT}/players/${name}/${encodedPassword}`;
         axios.get(encodedUri)
         .then(res=> {
           if (res.data.authSuccess) {
             setResponseData({ response: true, data: {successfulRegistration:true, message: 'Success..'} });
             console.log("GetPlayer------", res.data);
              deactivateBoth();
              batch(()=>{
               setPlayerLoggedIn_D(true, res.data.token);
               setPlayerStatus_D(res.data.status);
              });
           } else {
             setResponseData({ response: true, data: {message:res.data.message} });
           }
         })
         .catch(err=>{
           setResponseData({ response: true, data: {message:'Internal error server'} });
         });
  };

  return (
    <section className={on ? "login on" : "login"}>
      <h3 className="title">Loggin</h3>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputField">
          <input
            name="name"
            placeholder="name"
            ref={register({
              required: true
            })}
          />
        </div>
        <div className="inputField">
          <input
            name="password"
            placeholder="password"
            ref={register({
              required: true
            })}
          />
        </div>
        <input className="submit" type="submit" />
      </form>
      {responseData.response && (
        <div className="response">{JSON.stringify(responseData.data)}</div>
      )}
      <div className='goRegistration' onClick={ goRegistration }>GoRegistration</div>
    </section>
  );
};

export { Loggin };