import React from 'react';
import styles from './landing.module.css';

export default function Landing() {
  return (
    <div className={styles.landingArea}>
      <div className={styles.content}>
        <h1>Subscribe</h1>
        <p>
          Get the latest updates and news. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.swirlyLine}></div>
    </div>
  );
}
