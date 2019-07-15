import React from "react";
import "./styles/Home.scss";

const Profile = props => (
  <div className="Home">
    <p>U NO EDIT {props.match.params.idUser} !</p>
  </div>
);
export default Profile;
