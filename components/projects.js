import Project from '../components/project';

export default function Projects() {

  const projects = [
    {
      title: "NCI iPath",
      dates: "Mar 2022 - Dec 2022",
      partners: "DALI Lab, Dartmouth College",
      img: "/images/NCIiPath.png",
      description: "NCI iPath is a mobile app that screens and connects cancer patients to depression treatments based on their criteria. The project is funded by the National Cancer Institute (NCI) and Dartmouth-Hitchcock Medical Center and built in collaboration with Dr. Paul J. Barr, researcher at the Geisel School of Medicine, patients from St. Johnsbury and clinicians. It is currently being beta tested at St. Johnsbury\n",
      techStack: "React Native, Cloud Firestore, Git",
      color: "#DFDFDF",
      key: 0
    },
    {
      title: "Nuggets Game",
      dates: "Jan 2022 - Mar 2022",
      partners: "CS50: Software Design & Implementation",
      img: "/images/NuggetsGame.png",
      description: "Nuggets is a multi-client game, in which players explore a set of rooms and passageways in search of gold nuggets. We designed the server and the client for this project in C. Players move around a map where each room is revealed to them when they enter it and collect gold nuggets by stepping on piles. If a player occupies another player’s spot they are swapped. Our code handles everything, from player joining, moving, leaving and winning to managing gold distribution. View the code ",
      link: "https://github.com/nitya308/nuggets-game",
      techStack: "C, Git, Bash",
      key: 1
    },
    {
      title: "Student VolunteerMatch",
      dates: "Mar 2020 - Sep 2021",
      partners: "personal mid-quarantine project",
      img: "/images/StudentVolunteer.png",
      description: "A mid-lockdown project to help students at my school complete their community service requirements by matching them to projects in the neighborhood. I designed and coded this one myself. It’s a customisation engine with a quiz that takes in a student’s interests, skills and time frame and outputs resulting recommendations for volunteer projects. Deployed ",
      link: "https://nitya308.github.io/index.html",
      techStack: "HTML, CSS, JavaScript",
      color: "#F3F1FB",
      key: 2
    }
  ];
  return (
    <>
      {
        projects.map((project, index) => (
          <Project containerStyle={{ backgroundColor: project.color, padding: '4%' }}
            project={project}
            key={index}
          ></Project>
        ))
      }
    </>
  );

};