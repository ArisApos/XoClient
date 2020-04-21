import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useServerNotification } from '../Common';
import "./Static/registration.scss";
let count = 0;
const Registration = ({ on, setActiveWindows, postPlayerRequested, getPlayerRequested, setServerNotification }) => {
       const { register, handleSubmit, errors, reset } = useForm();
       console.log('--------------------Registrattttttiiioooonnnn!!!!!!!!!!!!!', count++);
       const { Loader, Message, success } = useServerNotification();
       const [requestedData, setRequestedData] = useState({file:null, name:null, password: null});
       const goLoggin = ()=>{
         setServerNotification(null, '', null, null);
         setActiveWindows({ registration: false, loggin: true });
       }
       const loggedIn = ()=> {
         console.log('===========name,password loggin',requestedData.name, requestedData.password)
         const resetAll = ()=>{reset();setRequestedData({});}
         getPlayerRequested(requestedData.name, requestedData.password, 'players', 'get', {cb:resetAll});
       }; 
      // useEffect(()=> {
      //   if(socket) {
      //     socket.on(ss.root.REGISTER, data => {
      //       console.log(data);
      //       setResponseData({ response: data.checkingPassed });
      //     });
      //   }
      // }, []);

      const onChangeFile = (e) => setRequestedData({file: e.target.files[0]});
      const onSubmit = data => {
        // socket.emit(cs.root.REGISTER, data);
        setRequestedData({name: data.name, password: data.password})
        const formData = new FormData();
        Object.keys(data).forEach(dataKey=>formData.append(dataKey, data[dataKey]))
        formData.append("avatar", requestedData.files);
        const headers = { "content-type": "multipart/form-data"};
        postPlayerRequested(formData, 'players', 'post', headers, {});
      };
  const  loggin =  !Loader && success ? <div key='loggin' onClick={ loggedIn } className='logginButton'>Loggin</div> : null;
  const  goLogginDiv =!Loader && success ? null : <div className='goLoggin' onClick={ goLoggin }>GoLoggin</div>;
  return (
    <section className={on ? "registration on" : "registration"}>
      <h3 className="title">Register</h3>
      { <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
              <br />
              5)at least 8 characters
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
            <label className="avatarLabel">
              {" "}
              Upload Avatar
              <input
                className="customFileInput"
                type="file"
                name="avatar"
                onChange={onChangeFile}
              />
            </label>
          </div>
        </div>
        <input className="submit" type="submit" />
      </form>
      }
      {goLogginDiv}
      <div className="responseContainer">{[Message, loggin]} </div>
      { Loader }
    </section>
  );
};

export { Registration };
