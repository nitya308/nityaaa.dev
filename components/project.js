import styles from '../styles/project.module.css';

const renderImage = (project) => (
  <div className={styles.projectImage}>
    <img
      src={project.img}
      alt={project.title}>
    </img>
  </div>
);

const renderText = (project, leftMargin) => (
  <div className={styles.projectImage}>
    <div className={leftMargin? styles.projectTextLeftMargin: styles.projectTextRightMargin}>
      {project.description}
      {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>here</a>}.
      <div className={styles.projectTech}> <b>Tech Stack:</b> <i>{project.techStack}</i></div>
    </div>
  </div>
);

export default function Project({ containerStyle, project }) {
  return (
    <div style={containerStyle}>

      <div className={styles.projectHeading}>
        <div className={styles.projectTitle}>{project.title}</div>
        <div className={styles.projectSubTitle}>
          <div>{project.dates}</div>
          <div>{project.partners}</div>
        </div>
      </div>
      <div className={styles.projectDescription}>
        {(project.key % 2 == 0) ? renderImage(project) : renderText(project)}
        {(project.key % 2 == 0) ? renderText(project, "leftMargin") : renderImage(project)}
      </div>
      {/* link to read more about project */}
    </div>
  );
}