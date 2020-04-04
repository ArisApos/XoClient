import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ENTRY_POINT } from "../../../models/onLine";
import "./Static/loggin.scss";


const Loggin = ({ on = true }) => {

  const [responseData, setResponseData] = useState({ response: false });

  useEffect(() => {

  }, []);

  const { register, handleSubmit } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
    axios
      .post(ENTRY_POINT+'/players/loggin', data)
      .then((res)=> {
        console.log(res);
        setResponseData({response:true, data: res.data })
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
    </section>
  );
};

export { Loggin };