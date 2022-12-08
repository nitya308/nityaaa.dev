import styles from '../styles/art.module.css';
import ExtraCurItem from './ExtraCurItem';
import { ecs } from '../data/skills.js';
import React from 'react';

export default function Art() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Art...</h3>

      <div className={styles.flex}>
        <div className={styles.artbox}>
          <img src="images/art_4.jpg" className={styles.artImg} />
          <p className={styles.caption}>
            ↑ Fall vibes in oil paint. I use a 12 inch canvas sketchbook for this stuff 🎨
          </p>
        </div>
        <div className={styles.artbox}>
          <p className={styles.info}>
            I've been painting for what feels like forever! These are some things I've made recently. The best thing about art is the opportunity to experiment (the wastepaper basket is a good friend), draw
            rough sketches and put ideas on paper! 
            <br/><br/>
            There's something magical about seeing an abstract idea in your head
            come to life and that's precisely what I love about coding too!
          </p>
        </div>

        <div className={styles.artbox}>
          <img src="images/art_2.JPG" className={styles.artImg} />
          <p className={styles.caption}>
            ↑ Homemade clay flowers (warning: it gets messy 😉)
          </p>
        </div>

        <div className={styles.artbox}>
          <img src="images/art_3.JPG" className={styles.artImg} />
          <p className={styles.caption}>
            ↑ This is actually created with natural wax and a bunch of random brush strokes; hence the 3D effect
          </p>
        </div>

      </div>
    </div>

  );
}