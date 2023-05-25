import React from 'react';
import styles from './css/Concerts.module.css';
import { concerts } from '../data/concerts.js';
import FadeIn from 'react-fade-in';

export default function Concerts() {
  console.log(concerts.map((e) => e));
  return (
    <>
      <ul className={styles.ul}>
        <FadeIn>
          {concerts.map((concert) => (
            <li className={styles.li}>
              <b>{concert[0]}</b>
              <br />
              {concert[1]}
            </li>
          ))}
        </FadeIn>
      </ul>
    </>
  );
}
