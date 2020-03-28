import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { getGameId } from "../../libs";
let GamesMenu = ({ addNewGameDisUCB }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = data => {
        const newGameOptions = { newGameId:getGameId(), ...data, timeLimmit:data.timeLimmit*1000 };
        setMenuVisible(false);  
        addNewGameDisUCB(newGameOptions);
    };
    const onClickButton = ()=>setMenuVisible(!menuVisible);  
    
    return (
      <>
        <div className={ menuVisible ? "newGameButton on" : "newGameButton" } onClick={onClickButton}>
        </div>
        <form
          className={
            menuVisible ? "gamesMenu menuVisible" : "gamesMenu menuHidden"
          }
          onSubmit={handleSubmit(onSubmit)}
        >
          <input name="playerXName" placeholder='nameX' ref={register({ required: true, pattern: /^([a-zA-Z0-9_-]){3,5}$/ })} />
          {errors.playerXName && "nameX is required Please enter Alpanumeric Letters with length 3-5"}
          <input name="playerOName" placeholder='nameO' ref={register({ required: true, pattern: /^([a-zA-Z0-9_-]){3,5}$/ })} />
          {errors.playerOName && "nameO is required Please enter Alpanumeric Letters with length 3-5"}
          <input name="timeLimmit" placeholder='time Limmit(sec)' ref={register({required: true, pattern: /^[2-8]$/ })} />
          {errors.timeLimmit && "timeLimmit is required Please enter  a  number 2-8"}
          <input className='submit' type="submit" />
        </form>
      </>
    );
};

GamesMenu = React.memo(GamesMenu);

export  { GamesMenu }