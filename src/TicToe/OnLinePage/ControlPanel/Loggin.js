import React, { useState, useEffect } from "react";
import { batch } from 'react-redux';
import { useForm } from "react-hook-form";
import axios from "axios";
import { ENTRY_POINT } from "../../../models/onLine";
import "./Static/loggin.scss";


const Loggin = ({ on, setActiveWindows, setPlayerLoggedIn_D, setPlayerStatus_D }) => {

  const [responseData, setResponseData] = useState({ response: false });
  const [loader, setLoader] = useState(false);
  const goRegistration = ()=>setActiveWindows({registration:true, loggin: false});
  useEffect(() => {}, []);

  const { register, handleSubmit, reset } = useForm(); // initialise the hook
  const deactivateBoth = ()=>setActiveWindows({ registration: false, loggin: false });
  const getAllPlayers = (tokken) => {
    axios.get(ENTRY_POINT+'/players' , { headers: { Authorization:`Bearer ${tokken}`} })
    .then(res=> {
      console.log('aaaallllll',res.data)
    })
    .catch(err=>{
      console.log('errrrr',err);
    })
  }
  const onSubmit = data => {
    console.log(data);
    setLoader(true);
    const { name, password } = data;
    const encodedPassword = encodeURIComponent(password);
    const encodedUri = `${ENTRY_POINT}/players/${name}/${encodedPassword}`;
    axios.get(encodedUri)
      .then(res=> {
        if (res.data.authSuccess) {
          setResponseData({ response: true, data: {authSuccess:res.data.authSuccess, message: res.data.message} });
          console.log("GetPlayer-----success-", res.data);
          deactivateBoth();
          batch(()=>{
            setPlayerStatus_D(res.data.status);
            setPlayerLoggedIn_D(true, res.data.token);
          });
          reset();
          setResponseData({ response: false });
        } else {
             console.log('problem');
             setResponseData({ response: true, data: {authSuccess:res.data.authSuccess, message:res.data.message} });
           }
           setLoader(false);
         })
         .catch(err=>{
           console.log('ffffffffffffffff',err.message, err.body, err.data, err);
           setResponseData({ response: true, data: {authSuccess: false, message:'Internal error server'} });
           setLoader(false);
         });
    
  };
  return (
    <section className={on ? "login on" : "login"}>
      <h3 className="title">Loggin</h3>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputField">
          <input name="name" placeholder="name" ref={register({required: true})}/>
        </div>
        <div className="inputField">
          <input name="password" placeholder="password" ref={register({ required: true })}/>
        </div>
        <input className="submit" type="submit" />
      </form>
      <div className='goRegistration' onClick={ goRegistration }>GoRegistration</div>
      {responseData.response && !loader && (
        <div className={ responseData.data.authSuccess? "response" : "response fail" }>{responseData.data.message}</div>
      )}
      {loader && <div className='loaderContainer'><div className='loader'></div></div>}
    </section>
  );
};

export { Loggin };