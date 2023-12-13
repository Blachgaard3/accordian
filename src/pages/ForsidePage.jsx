// NavigationPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationPage = () => {
  return (
    <div>
      <h1>Vælg en side:</h1>
      <nav>
        <ul>
          <li><Link to="/ForsidePage">Forside</Link></li>
          <li><Link to="/LoginPage">Login</Link></li>
          <li><Link to="/Order1">Order 1</Link></li>
          <li><Link to="/Order2">Order 2</Link></li>
          <li><Link to="/Order3">Order 3</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationPage;