import React from 'react';

const Profile = (props) => (
  <div className='Home'>
    <p>U NO EDIT {props.match.params.idUser} !</p>
  </div>
);
export default Profile;
