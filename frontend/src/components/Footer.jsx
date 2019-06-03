import React from "react";
import "./styles/Footer.scss";

const Footer = () => (
  <footer className="Footer">
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
          <li>Scenariothèque</li>
          <li>AideDD</li>
          <li>Cartes</li>
          <li>Roll20</li>
        </ul>
      </div>
      <div>
        <h3>Divers</h3>
        <ul>
          <li>Nous contacter</li>
          <li>Mentions légales</li>
        </ul>
      </div>
    </nav>
    <p>Copyright 2019 - Tous droits réservés</p>
  </footer>
);

export default Footer;
