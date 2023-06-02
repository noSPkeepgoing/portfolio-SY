import React, { useState } from 'react';
import App from './App';
import styles from './Home.module.css';

export default function Home() {
  const [home, setHome] = useState(true);
  return home ? (
    <section className={styles.home}>
      <button className={styles.button} onClick={() => setHome(false)}>
        Sunyoul Choi
      </button>
    </section>
  ) : (
    <App />
  );
}
