import React from 'react';
import styles from './css/Concerts.module.css';
import { Pasts, Upcomings } from '../data/concerts.js';
import FadeIn from 'react-fade-in';

export default function Concerts() {
  return (
    <>
      <div className={styles.select}>
        <a>
          <b>Past Concerts</b>
        </a>
        <a className={styles.active} href='#upcoming'>
          Upcoming Concerts
        </a>
      </div>
      <ul id='past' className={styles.ul}>
        <FadeIn>
          {Pasts.map((item, idx) => (
            <li key={idx} className={styles.li}>
              <b>{item[0]}</b>
              <br />
              {item[1]}
            </li>
          ))}
        </FadeIn>
      </ul>
      <div className={styles.select}>
        <a className={styles.active} href='#past'>
          Past Concerts
        </a>
        <a>
          <b>Upcoming Concerts</b>
        </a>
      </div>
      <ul id='upcoming' className={styles.ul}>
        <FadeIn>
          {Upcomings.map((item, idx) => (
            <li key={idx} className={styles.li}>
              <b>{item[0]}</b>
              <br />
              {item[1]}
            </li>
          ))}
        </FadeIn>
      </ul>
    </>
  );
}
