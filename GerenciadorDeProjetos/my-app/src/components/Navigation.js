import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/projects">Projetos</Link></li>
        // Adicione mais links conforme necessário
      </ul>
    </nav>
  );
};

export default Navigation;
