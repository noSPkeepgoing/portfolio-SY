import React from 'react';
import styles from './Concerts.module.css';
import { Pasts, Upcomings } from '../../data/concerts.js';
import FadeIn from 'react-fade-in';

export default function Concerts() {
  return (
    <section className={styles.container}>
      <div id='past' className={styles.select}>
        <a>
          <b>Past Concerts</b>
        </a>
        <a className={styles.active} href='#upcoming'>
          Upcoming Concerts
        </a>
      </div>
      <ul className={styles.ul}>
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
      <div id='upcoming' className={styles.select}>
        <a className={styles.active} href='#past'>
          Past Concerts
        </a>
        <a>
          <b>Upcoming Concerts</b>
        </a>
      </div>
      <ul className={styles.ul}>
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
    </section>
  );
}
