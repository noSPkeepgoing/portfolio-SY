import React from 'react';
import styles from './css/Listen.module.css';
import { videos } from '../data/listen';

export default function Listen() {
  return (
    <section className={styles.container}>
      <ul className={styles.ul}>
        {videos.map((video, idx) => (
          <li key={idx} className={styles.li}>
            <h2 className={styles.title}>{video.title}</h2>
            <iframe
              key={idx}
              src={`https://www.youtube.com/embed/${video.id}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
              className={styles.video}
            ></iframe>
          </li>
        ))}
      </ul>
    </section>
  );
}
