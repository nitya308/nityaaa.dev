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
    <div className={styles.container}>
      {/* <div className={styles.imageContainer}>
        <img
          src="/images/profile.jpg"
          alt="some pictures of me"
          width={300}
          style={{ borderRadius: '5px' }}>
        </img>
      </div> */}
      {/* <div className={styles.introContainer}> */}
      <div className={styles.introContainer}>
        <h1 className={styles.heading}>Hi! I'm Nitya</h1>
        {/* <h2>Developer, Dartmouth College 🌲</h2> */}
        A Computer Science and Human-Centered Design student at Dartmouth College 🌲 passionate about designing and building delightful experiences
      </div>
    </div>
    // </div>
  );
}
