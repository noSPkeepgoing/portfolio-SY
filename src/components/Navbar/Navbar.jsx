import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const category = ['about', 'concerts', 'listen', 'contact'];

export default function Navbar() {
  const goHome = () => {
    window.location.reload(true);
  };

  return (
    <nav className={styles.navbar}>
      <p onClick={goHome} className={styles.logo}>
        Sunyoul Choi
      </p>
      <ul className={styles.list}>
        {category.map((item, index) => (
          <li className={styles.item} key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? `${styles.show}` : '')}
              to={item}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
