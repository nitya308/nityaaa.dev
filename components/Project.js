import styles from '../styles/project.module.css';
import React from 'react'
import Link from 'next/link';
import OnVisible from 'react-on-visible';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import TechTag from './TechTag';

const renderImage = (project, left) => (
  <a className={clsx({
    [styles.projectImage]: true,
    [styles.left]: left,
    [styles.right]: !left
  })}>
    <img
      src={project.img}
      alt={project.title}>
    </img>
  </a>
);

const renderText = (router, project, left) => (
  <div className={clsx({
    [styles.projectImage]: true,
    [styles.left]: left,
    [styles.right]: !left,
    [styles.projectTextLeftMargin]: !left,
    [styles.projectTextRightMargin]: left
  })} >
    <span>
      {project.description}
      {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>here.</a>}
    </span>
    <div className={styles.projectTech}> <b>Tech Stack: </b>
      {project.techs}
      {/* <TechTag techs={project.techStack}></TechTag> */}
    </div>
    {/* <button onClick={() => router.push('/project' + project.key)} className={styles.projectButton} href="/">Read more ...</button> */}
  </div>
);

export default function Project({ containerStyle, project }) {
  const router = useRouter();

  return (
    <Link href={project.link ?? '/'} className={styles.projectLink} style={{
      textDecoration: "inherit",
      color: "inherit",
      cursor: "auto"
    }}>
      <OnVisible visibleClassName={styles.visible} className={styles.projectContainer} style={containerStyle} percent={30}>
        <div className={styles.projectHeading}>
          <div className={styles.projectTitle}>{project.title}</div>
          <div className={styles.projectSubTitle}>
            <img
              src={project.category == "UI-UX Design" ? "/assets/build.svg" : "/assets/tool.svg"}
              alt="some pictures of me"
              height={25}
              style={{ borderRadius: '5px' }}>
            </img>
            {project.category}
          </div>
        </div>
        <div className={styles.projectDescription}>
          {project.subtitle}
        </div>
        <img
          className={clsx({
            [styles.projectImage]: true,
          })}
          src={project.img}
          alt={project.title}>
        </img>
      </OnVisible>
    </Link>
  );
}
