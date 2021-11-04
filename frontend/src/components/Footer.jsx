import React from 'react';
import SFooter from './styles/Footer';
import { Link } from 'react-router-dom';

const Footer = () => (
  <SFooter className='Footer'>
    <nav>
      <div>
        <h3>Explorer</h3>
        <ul>
          <li>Accueil</li>
          <li>Personnages</li>
          <li>Scenarii</li>
          <li>Groupes</li>
        </ul>
      </div>
      <div>
        <h3>Liens utiles</h3>
        <ul>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://scenariotheque.org'
            >
              Scénariothèque
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.aidedd.org/'
            >
              AideDD
            </a>
          </li>
          <li>Cartes</li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://roll20.net/'
            >
              Roll20
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Divers</h3>
        <ul>
          <li>Nous contacter</li>
          <li>Mentions légales</li>
          <li>
            <Link to='/contributors'>Contributeurs</Link>
          </li>
        </ul>
      </div>
    </nav>
    <p>Copyright 2019 - Tous droits réservés</p>
  </SFooter>
);

export default Footer;
