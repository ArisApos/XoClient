import React from "react";
import "./Static/registration.scss";

const Registration = ({ isLoggedIn }) => {
  return (
    <section className="registration">
      <h3 className="title">Register</h3>
      <div className="statusItem opponents">Oponents</div>
      <div className="statusItem points">Points</div>
      <div className="statusItem availability">availability</div>
      <div className="statusItem playTime">playTime</div>
    </section>
  );
};

export { Registration };
