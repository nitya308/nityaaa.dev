import styles from '../styles/work.module.css';
import WorkItem from './WorkItem';

const item1 = {
  company: 'Digital Applied Learning and Innovation (DALI) Lab',
  location: 'Hanover, NH',
  dates: 'Jan 2021 - Present',
  title: 'Software Engineer & Development mentor',
  description: [
    'Collaborating with design and development teams to build full-stack logic for mobile & web applications',
    'Developing NIH funded mobile app for screening, treatment matching and progress tracking of 700+ cancer patients at Dartmouth-Hitchcock medical centers',
    'Implementing Firebase NoSQL database and React-Native logic for collecting, storing, transmitting, and deleting personal health information under HIPAA and creating click tracking features for hospital data',
  ],
}

const item2 = {
  company: 'Geisel Jacobson Lab',
  location: 'Hanover, NH',
  dates: 'Jun 2022 - Sep 2022',
  title: 'Android Developer Intern',
  description: [
    'Worked on novel 400+ user full-stack health data statistical analysis application using flutter/dart',
    'Deployed Bluetooth functionality to get exercise and heart rate data from Fitbit and smart wearables and created frontend UI flows for patient logs',
  ],
}

const item3 = {
  
}

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
        <WorkItem item={item1}></WorkItem>
      </div>
    </div>
  );
}