import React from 'react';
import Title from '../components/Title';

const Contributors = () => (
  <div className='Contributors'>
    <Title label='Contributors' />
    <ul>
      <li>
        <p>Sabine Robard</p>
        <ul>
          <li>Maquette</li>
          <li>Logo</li>
        </ul>
      </li>
      <li>
        Emilie Villière
        <ul>
          <li>Design des cartes Personnages</li>
        </ul>
      </li>
      <li>
        Benjamin Beugnet
        <ul>
          <li>Refonte cartes Personnages sans Semantic-UI</li>
          <li>
            M'écouter rager sur l'intégration des cartes Personnages sans
            Semantic-UI
          </li>
        </ul>
      </li>
      <li>
        Christine Brassart
        <ul>
          <li>Proposition de l'outil Figma pour le prototypage</li>
          <li>"Canard en plastique" de fin de journée (Merci la frangine !)</li>
        </ul>
      </li>
      <li>
        Antoine Jacqmin
        <ul>
          <li>Aide à la réflexion autour du design global</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Contributors;
