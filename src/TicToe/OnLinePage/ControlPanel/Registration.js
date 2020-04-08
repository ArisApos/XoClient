import React, { useState, useEffect } from "react";
import { batch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ENTRY_POINT } from "../../../models/onLine";
import "./Static/registration.scss";



const Registration = ({ on, setActiveWindows, setPlayerLoggedIn_D, setPlayerStatus_D }) => {
      const [responseData, setResponseData] = useState({response: false});
      const [loader, setLoader] = useState(false);
       const [file, setFile] = useState(null);
       const goLoggin = ()=>setActiveWindows({ registration: false, loggin: true });
       const deactivateBoth = ()=>setActiveWindows({ registration: false, loggin: false });
       const loggedIn = ()=> {
         setLoader(true);
         setResponseData({ response: true, data: {successfulRegistration:true,message: 'wait authentication loggin...'} });
         const encodedPassword = encodeURIComponent(responseData.data.password);
         const encodedUri = `${ENTRY_POINT}/players/${responseData.data.name}/${encodedPassword}`;
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
              reset();
              setResponseData({ response: false });
           } else {
             setResponseData({ response: true, data: {message:res.data.message} });
           }
           setLoader(false);
         })
         .catch(err=>{
           setResponseData({ response: true, data: {message:'Internal error server'} });
           setLoader(false);
         });
       }; 
      // useEffect(()=> {
      //   if(socket) {
      //     socket.on(ss.root.REGISTER, data => {
      //       console.log(data);
      //       setResponseData({ response: data.checkingPassed });
      //     });
      //   }
      // }, []);

      const { register, handleSubmit, errors, reset } = useForm(); // initialise the hook
      const onChangeFile =(e) => setFile(e.target.files[0]);
      const onSubmit = data => {
        // socket.emit(cs.root.REGISTER, data);
        setLoader(true);
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
            setLoader(false);
          })
          .catch(error => {
            if(error.response) setResponseData({ response: true, data: error.response.data });
            else {
              console.log('internal error',error);
              setResponseData({ response: true, data: {message:'Internal error server'} });
            } 
            setLoader(false);
          });
      };
      let message = null;
      let loggin = null;
      let goLogginDiv = <div className='goLoggin' onClick={ goLoggin }>GoLoggin</div>;

      if(responseData.response && !loader) {
        message = <div key='message' className={ responseData.data.successfulRegistration ? "response success" : "response fail"}>{responseData.data.message}</div>;
        loggin =  responseData.data.successfulRegistration ? <div key='loggin' onClick={ loggedIn } className='logginButton'>Loggin</div> : null;
        goLogginDiv = responseData.data.successfulRegistration ? null : goLogginDiv;
      }
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
          <div className="avatarButton">
            <label className="avatarLabel" > Upload Avatar 
            <input className='customFileInput' type="file" name="avatar" onChange={ onChangeFile } />
            </label>
          </div>
        </div>
        <input className="submit" type="submit" />
      </form>
      { goLogginDiv }
      <div className='responseContainer'>{ [message, loggin] } </div>
      { loader && <div className='loaderContainer'><div className='loader'></div></div> }
    </section>
  );
};

export { Registration };
