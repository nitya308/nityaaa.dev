import styles from '../styles/work.module.css';
import WorkItem from './WorkItem';
import { skills } from '../data/skills';

import { workExperiences } from '../data/workExperiences';

export default function Work() {
  return (
    <div className={styles.container}>
      <div className={styles.education}>
        <h3>
          Education
        </h3>
        <span>
          Dartmouth College, <i>Hanover, NH </i><br />
          Sep 2021 - Jun 2025<br />
          Bachelors in Computer Science<br />
          Minor in Human-Centered Design & Mathematics<br />
        </span>
        <h3>
          Skills
        </h3>
        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={styles.experience}>
        <h3>
          Experience
        </h3>
          {workExperiences.map((item, index) => (
            <WorkItem item={item} noline={index === workExperiences.length - 1}></WorkItem>
          ))}
      </div>
    </div>
  );
}
