import styles from '../styles/introduction.module.css';
import Image from 'next/image';

export default function Introduction() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="/images/profile.jpg"
          alt="some pictures of me"
          width={300}
          style={{ borderRadius: '5px' }}>
        </img>
      </div>
      <div className={styles.introContainer}>
        <div>
          <h1>Hi! I'm Nitya.</h1>
          <h2>Developer, Dartmouth College 🌲</h2>

          I'm a Computer Science and human-centered design student at Dartmouth.<br />
          I love doodling, coding, meeting new people and the outdoors.<br />

        </div>
      </div>
    </div>
  );
}