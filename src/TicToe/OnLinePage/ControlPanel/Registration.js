import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import socketIOClient from "socket.io-client";
import "./Static/registration.scss";

let socket;


const Registration = ({ isLoggedIn=true }) => {
      const [socketData, setSocketData] = useState({
        response: false,
        endpoint: "http://127.0.0.1:5000"
      });
      useEffect(()=> {
        socket = socketIOClient(socketData.endpoint);
        socket.on("sConnectionReply", data => {
          console.log(data);
          setSocketData({...socketData, response:data.msg})
          socket.emit("cConnectionReply", { data: "Dude!!! This is awesome, from React Client" });
        });
        socket.on("sRegistrationFormSubmit", (data) => {
          console.log(data);
          setSocketData({ ...socketData, response: data.checkingPassed }); 
        });
      }, []);
      const { register, handleSubmit, errors } = useForm(); // initialise the hook
      const onSubmit = data => {
        socket.emit("cRegistrationFormSubmit", data);
        console.log(data);
      };
  return (
    <section
      className={isLoggedIn ? "registration isLoggedIn" : "registration"}
    >
      <h3 className="title">Register</h3>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          placeholder="name"
          ref={register({ required: true, pattern: /^([a-zA-Z0-9_-]){3,8}$/ })}
        />
        {errors.name && (
          <span className="error">
            name is required Please enter Alpanumeric Letters with length 3-8
          </span>
        )}
        <input
          name="playersLimmit"
          placeholder="players Limmit (2-9)"
          ref={register({ required: true, pattern: /^[2-9]$/ })}
        />
        {errors.playersLimmit && (
          <span className="error">
            players Limmit is required Please enter a number 2-8
          </span>
        )}
        <input
          name="timeLimmit"
          placeholder="time Limmit(2-9)'"
          ref={register({ required: true, pattern: /^[2-9]$/ })}
        />
        {errors.timeLimmit && (
          <span className="error">
            time Limmit is required Please enter a number 2-9
          </span>
        )}
        <input className="submit" type="submit" />
        {socketData.response && <div>{socketData.response}</div>}
      </form>
    </section>
  );
};

export { Registration };
