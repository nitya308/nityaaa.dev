import styles from '../styles/introduction.module.css';
import { socials } from './Footer';

const renderSocialLinks = () => (
  <>
    {socials.map((social) => (
      <a target="_blank" href={social.url} rel="noopener noreferrer" className={styles.socialLinks} style={{ textDecoration: 'none' }}>
        <img
          height={30}
          width={30}
          src={social.icon2}
          alt={social.title}>
        </img>
      </a>
    ))}
  </>
);

export default function Introduction() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.introContainer}>
          <h1 className={styles.heading}>Hi! I'm Nitya</h1>
          A Computer Science and Human-Centered Design student at Dartmouth College 🌲 passionate about designing and building delightful experiences
        </div>
      </div>
      <div className={styles.introContainer3}>
        These are the two halves of my brain:
      </div>
      <div className={styles.introContainer3} style={{ fontSize: 25, paddingBottom:10 }}>
        Design & Coding
      </div>
    </>
  );
}
