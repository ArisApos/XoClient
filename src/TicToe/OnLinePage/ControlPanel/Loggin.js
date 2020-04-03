import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Static/login.scss";


const Loggin = ({
  socketData: { socket, ss, cs },
  on = true
}) => {
  const [responseData, setResponseData] = useState({ response: false });

  useEffect(() => {
    if (socket) {
      socket.on(ss.root.REGISTER, data => {
        console.log(data);
        setResponseData({ response: data.checkingPassed });
      });
    }
  }, []);

  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    socket.emit(cs.root.REGISTER, data);
    console.log(data);
  };

  return (
    <section
      className={on ? "login on" : "login"}
    >
      <h3 className="title">Loggin</h3>
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
          name="password"
          placeholder="password"
          ref={register({
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
          })}
        />
        {errors.password && (
          <span className="error">
            Password must contain
            <br />
            1)At least 1 lowercase alphabetical character
            <br />
            2)at least 1 uppercase alphabetical character
            <br />
            3)at least 1 numeric character
            <br />
            4)at least one special character(!@#$%^&*)
          </span>
        )}
        <input className="submit" type="submit" />
        {responseData.response && <div>{responseData.response}</div>}
      </form>
    </section>
  );
};

export { Loggin };