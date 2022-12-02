import styles from '../styles/extracurriculars.module.css';
import ExtraCurItem from './ExtraCurItem';

const item = {
  title: 'Teaching Assistant',
  description: 'I am a first year student at Dartmouth College, where I am pursuing a Bachelors in Computer Science and a minor in Human-Centered Design and Mathematics. I am also a member of the',
  img: '/images/profile.jpg',
  color: "#ffffff"
}

const item2 = {
  title: 'Teaching Assistant',
  description: 'I am a first year student at Dartmouth College, where I am pursuing a Bachelors in Computer Science and a minor in Human-Centered Design and Mathematics. I am also a member of the',
  img: '/images/profile.jpg',
  color: "#ffffff"
}

export default function Extracurriculars() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Work I Enjoy</h3>
      <div className={styles.extracurriculars}>
        <ExtraCurItem item={item}></ExtraCurItem>
        <ExtraCurItem item={item2}></ExtraCurItem>
        <ExtraCurItem item={item2}></ExtraCurItem>
      </div>
    </div>
  );
}