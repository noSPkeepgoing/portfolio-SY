import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Navbar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <input className={styles.toggle} id='toggle' type='checkbox' />
      <label className={styles.navicon} for='toggle'>
        <span className={styles.naviconlist}></span>
      </label>
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

const handleToggle = (e) => {
  // const target =
  //   e.target.parentNode.parentNode.childNodes[0].childNodes[1].childNodes;
  // target.forEach((node) => console.log(node.classList.add(`${styles.toggle}`)));
};
