import React from 'react';
import styles from './css/Footer.module.css';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <h3 className={styles.text}>click here</h3>
      <div className={styles.icons}>
        <a href='https://www.instagram.com/melody7638/'>
          <FaInstagramSquare />
        </a>
        <a href='https://www.facebook.com/profile.php?id=100000415859058'>
          <FaFacebookSquare />
        </a>
      </div>
    </footer>
  );
}
