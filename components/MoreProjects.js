import styles from '../styles/footer.module.css';
import projects from '../data/projects';
import Link from 'next/link';

export default function MoreProjects() {
  return (
    <div className={styles.pcontainer}>
      <div className={styles.slab}>MORE PROJECTS</div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 50, flexWrap: 'wrap', fontSize: 25 }}>
        <Link href='/' className={styles.proj}>
          All
        </Link>
        {
          projects.map((project, index) => (
            <Link href={project.link} className={styles.proj}>
              {project.title}
            </Link>
          ))
        }
      </div>
    </div>
  );

};

