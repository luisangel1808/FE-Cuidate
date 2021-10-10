import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../static/Logo.png'
import '../styles/components/Header.css';

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <nav>
        <Link to="/" onClick={() => setMenu(false)}>
          <img src={img1} alt="Cons" />
        </Link>
        <ul className={`menu ${menu ? 'active' : 'inactive'}`}>
          <li className="item">
            <Link to="/login" onClick={() => setMenu(false)}>
              Acceder
            </Link>
          </li>
          <li className="item">
            <Link to="/register-arterial-pressure" onClick={() => setMenu(false)}>
              Presión arterial
            </Link>
          </li>
          <li className="item">
            <Link to="/get-arterial-data" onClick={() => setMenu(false)}>
              Consultar registros
            </Link>
          </li>
          <li className="item">
            <Link to="videos" onClick={() => setMenu(false)}>
              Videos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
