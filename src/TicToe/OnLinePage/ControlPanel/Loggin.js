import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Static/loggin.scss";
import axios from "axios";


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
    console.log(data);
    axios
      .post("/login", data)
      .then((response)=> {
        console.log(response);
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
        {responseData.response && <div>{responseData.response}</div>}
      </form>
    </section>
  );
};

export { Loggin };