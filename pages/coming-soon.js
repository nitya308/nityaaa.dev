import Extracurriculars from '../components/Extracurriculars.js';
import styles from '../styles/comingsoon.module.css'
import NavBar from '../components/Navbar.js';
import Work from '../components/Work.js';
import Art from '../components/Art.tsx';

export default function ComingSoon() {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.container}>
        Details about this coding project coming soon!
        <br></br>
        In the meantime, check out some other projects...
      </div>
    </>
  );
}