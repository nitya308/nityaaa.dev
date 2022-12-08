import Project from './Project';
import projects from '../data/projects';

export default function Projects() {
  return (
    <>
      {
        projects.map((project, index) => (
          <Project containerStyle={{ backgroundColor: project.color }}
            project={project}
            key={index}
          ></Project>
        ))
      }
    </>
  );

};
