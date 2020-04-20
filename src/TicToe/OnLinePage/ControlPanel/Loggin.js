import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ServerNotification } from "../Common";
import "./Static/loggin.scss";


const Loggin = ({ on, setActiveWindows, getPlayerRequested }) => {
  const [userLocationHere, setUserLocationHere] = useState(true);
  const { Loader, Message, success, identifier } = false? ServerNotification() : { Loader:null, Message:null, success:null };
  const { register, handleSubmit, reset } = useForm();
  const goRegistration = ()=>setActiveWindows({registration:true, loggin: false});
  // Go player status
  const deactivateBoth = ()=>setActiveWindows({ registration: false, loggin: false });
  // Go to player status and reset form
  if(success && identifier && identifier.location === 'registration'){
    setUserLocationHere(false);
    setTimeout(()=> { reset(); deactivateBoth();},1000);
  } 


  // const getAllPlayers = (tokken) =>()
    // axios.get(ENTRY_POINT+'/players' , { headers: { Authorization:`Bearer ${tokken}`} })
    // .then(res=> {
    //   console.log('aaaallllll',res.data)
    // })
    // .catch(err=>{
    //   console.log('errrrr',err);
    // })
  const onSubmit = data => {
    const { name, password } = data;
    const endpoint = 'players';
    const method = 'get'
    const identifier = {location:'loggin'};
    getPlayerRequested(name,password,endpoint,method,identifier);
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
      { [Message, Loader] }
    </section>
  );
};

export { Loggin };