import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Static/registration.scss";

const Registration = ({ isLoggedIn=true }) => {
      const { register, handleSubmit, errors } = useForm(); // initialise the hook
      const onSubmit = data => {console.log(data);};
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
        {errors.name &&
          "name is required Please enter Alpanumeric Letters with length 3-8"}
        <input
          name="playersLimmit"
          placeholder="players Limmit (2-9)"
          ref={register({ required: true, pattern: /^[2-9]$/ })}
        />
        {errors.playersLimmit &&
          "players Limmit is required Please enter a number 2-8"}
        <input
          name="timeLimmit"
          placeholder="time Limmit(2-9)'"
          ref={register({ required: true, pattern: /^[2-9]$/ })}
        />
        {errors.timeLimmit &&
          "time Limmit is required Please enter a number 2-10"}
        <input className="submit" type="submit" />
      </form>
    </section>
  );
};

export { Registration };
