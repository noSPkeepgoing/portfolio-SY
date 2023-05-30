import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <p className={styles.logo}>Sunyoul Choi</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link onClick={handleClass} className={styles.show} to='/about'>
            About
          </Link>
        </li>
        <li className={styles.item}>
          <Link onClick={handleClass} to='concerts'>
            Concerts
          </Link>
        </li>
        <li className={styles.item}>
          <Link onClick={handleClass} to='/listen'>
            Listen
          </Link>
        </li>
        <li className={styles.item}>
          <Link onClick={handleClass} to='/contact'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const handleClass = (e) => {
  e.target.classList.add(`${styles.show}`);

  [...e.target.parentNode.parentNode.childNodes]
    .filter((node) => node !== e.target.parentNode)
    .forEach((node) => node.childNodes[0].classList.remove(`${styles.show}`));
};
