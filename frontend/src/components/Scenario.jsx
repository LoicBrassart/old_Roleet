import React from 'react';
import SScenario from './styles/Scenario';

const Scenario = ({ scenData: { title, summary, created_at }, locked }) => {
  return (
    <SScenario className='Scenario'>
      <header>
        <div>
          <h2>{title}</h2>
          <p>{new Date(created_at).toDateString()}</p>
        </div>
        <button disabled={locked}>Lire</button>
      </header>
      <p>{summary}</p>
    </SScenario>
  );
};
export default Scenario;
