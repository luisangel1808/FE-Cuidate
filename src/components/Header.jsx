import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../static/img1.png'
import '../styles/components/Header.css';

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <nav>
        <Link to="/" onClick={() => setMenu(false)}>
          <img src={img1} alt="Cons" />
        </Link>
        <p>ConsultoriOnline</p>
        <ul className={`menu ${menu ? 'active' : 'inactive'}`}>
          <li className="item">
            <Link to="/signup" onClick={() => setMenu(false)}>
              Acceder
            </Link>
          </li>
          <li className="item">
            <Link to="/available-appointments" onClick={() => setMenu(false)}>
              Citas disponibles
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
