import Extracurriculars from '../components/Extracurriculars.js';
import styles from '../styles/introduction.module.css';
import NavBar from '../components/Navbar.js';
import Work from '../components/Work.js';
import Art from '../components/Art.tsx';

export default function Home() {
  return (
    <>
      <NavBar active={"About"}></NavBar>
      <div className={styles.container2}>
        <div className={styles.imageContainer}>
          <img
            src="/images/profile.jpg"
            alt="some pictures of me"
            width={300}
            style={{ borderRadius: '5px' }}>
          </img>
        </div>
        <div className={styles.introContainer}>
          <div className={styles.introContainer2}>
            <h1 className={styles.heading}>About Me</h1>
              A lot of my work centers around trying to create things in a way that improves peoples lives! As for my hobbies, I love to paint, travel and cook.
          </div>
        </div>
      </div>
      <Work></Work>
      <Extracurriculars></Extracurriculars>
      <Art></Art>
    </>
  );
}