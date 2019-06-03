import React from "react";
import "./styles/Title.scss";

const Title = ({ label, orientation = "right" }) => (
  <div className="Title">
    <img src="/img/user-avatar-default.png" className={orientation} alt="" />
    <h1>{label}</h1>
  </div>
);
export default Title;
