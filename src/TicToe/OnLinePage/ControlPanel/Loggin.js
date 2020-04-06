import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ENTRY_POINT } from "../../../models/onLine";
import "./Static/loggin.scss";


const Loggin = ({ on, setActiveWindows }) => {

  const [responseData, setResponseData] = useState({ response: false });
  const goRegistration = ()=>setActiveWindows({registration:true, loggin: false});
  useEffect(() => {

  }, []);

  const { register, handleSubmit } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
    const { name, password } = data;
    axios
      .get(`${ ENTRY_POINT }/players/${ name }/${ password }`)
      .then((res)=> {
        console.log(res);
        setResponseData({response: true, data: res.data})
      })
      .catch((error)=> {
        console.log(error);
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