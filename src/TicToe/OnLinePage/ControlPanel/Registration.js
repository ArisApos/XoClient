import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ENTRY_POINT } from "../../../models/onLine";
import "./Static/registration.scss";



const Registration = ({ on=true }) => {
      const [responseData, setResponseData] = useState({response: false});
       const [file, setFile] = useState(null);

      // useEffect(()=> {
      //   if(socket) {
      //     socket.on(ss.root.REGISTER, data => {
      //       console.log(data);
      //       setResponseData({ response: data.checkingPassed });
      //     });
      //   }
      // }, []);

      const { register, handleSubmit, errors } = useForm(); // initialise the hook
      const onChangeFile =(e) => setFile(e.target.files[0])
      const onSubmit = data => {
        // socket.emit(cs.root.REGISTER, data);
        console.log(data, file);
        const formData = new FormData();
        Object.keys(data).forEach(dataKey=>formData.append(dataKey, data[dataKey]))
        formData.append("avatar", file);
        const headersConfig = {
          headers: {
            "content-type": "multipart/form-data",
          }
        };
        axios
          .post(ENTRY_POINT + "/players", formData, headersConfig)
          .then(res => {
            console.log(res);
            setResponseData({ response: true, data: res.data });
          })
          .catch(error => {
            console.log(error);
          });

      };

  return (
    <section className={on ? "registration on" : "registration"}>
      <h3 className="title">Register</h3>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputField">
          <input
            className={errors.name ? "errorInput" : null}
            name="name"
            placeholder="name"
            ref={register({
              required: true,
              pattern: /^([a-zA-Z0-9_-]){3,8}$/,
            })}
          />
          {errors.name && (
            <span className="error">
              name is required Please enter Alpanumeric Letters with length 3-8
            </span>
          )}
        </div>
        <div className="inputField">
          <input
            className={errors.password ? "errorInput" : null}
            name="password"
            placeholder="password"
            ref={register({
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
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
        </div>
        <div className="inputField">
          <input
            className={errors.maxPlayers ? "errorInput" : null}
            name="maxPlayers"
            placeholder="players Limmit (2-9)"
            ref={register({ required: true, pattern: /^[2-9]$/ })}
          />
          {errors.maxPlayers && (
            <span className="error">
              players Limmit is required Please enter a number 2-8
            </span>
          )}
        </div>
        <div className="inputField">
          <input
            className={errors.maxTime ? "errorInput" : null}
            name="maxTime"
            placeholder="time Limmit(2-9)'"
            ref={register({ required: true, pattern: /^[2-9]$/ })}
          />
          {errors.maxTime && (
            <span className="error">
              time Limmit is required Please enter a number 2-9
            </span>
          )}
        </div>
        <div className="inputField">
          <input type="file" name="myImage" onChange={ onChangeFile } />
        </div>
        <input className="submit" type="submit" />
      </form>
      {responseData.response && (
        <div className="response">{JSON.stringify(responseData.data)}</div>
      )}
    </section>
  );
};

export { Registration };
