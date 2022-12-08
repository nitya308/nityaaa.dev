import styles from '../styles/extracurriculars.module.css';
import ExtraCurItem from './ExtraCurItem';
import {ecs} from '../data/skills.js';

export default function Extracurriculars() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>What's Meaningful to Me...</h3>
      <div className={styles.extracurriculars}>
        {ecs.map((item) => (
          <ExtraCurItem item={item}></ExtraCurItem>
        ))}
      </div>
    </div>
  );
}