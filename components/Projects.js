import Project from './Project';
import projects from '../data/projects';
import styles from '../styles/project.module.css';

export default function Projects() {
  return (
    <div className={styles.projectscontainer}>
      {
        projects.map((project, index) => (
          <Project containerStyle={{ backgroundColor: project.color }}
            project={project}
            key={index}
          ></Project>
        ))
      }
    </div>
  );

};
