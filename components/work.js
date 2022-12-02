import styles from '../styles/work.module.css';

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
        <span>
          Java, Kotlin, Python, JavaScript, Typescript, C, ReactJS, Redux, React-Native, MongoDB, Cloud Firestore,
          Firebase, NodeJS, ExpressJS, HTML/JSX, CSS, Git, Bash, Swift <i>(learning)</i>
        </span>
      </div>
      <div className={styles.experience}>
        <h3>
          Experience
        </h3>

      </div>
    </div>
  );
}