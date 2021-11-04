import React from 'react';
import STitle from './styles/Title';

const Title = ({ label, orientation = 'right' }) => (
  <STitle className='Title'>
    <img src='/img/logo.svg' className={orientation} alt='' />
    <h1>{label}</h1>
  </STitle>
);
export default Title;
