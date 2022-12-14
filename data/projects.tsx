const projects = [
  {
    title: "NCI iPath",
    dates: "Mar 2022 - Dec 2022",
    partners: "DALI Lab, Dartmouth College",
    img: "/images/NCIiPath.png",
    description: "Full-stack app developed under NIH funded grant. iPath is a screening, treatment matching and progress tracking tool for 700+ cancer patients with depression in Grafton County. We implement Firebase NOSQL database, and React, Redux logic for handling personal health information under HIPAA. It was built in collaboration with Dartmouth-Hitchcock Medical Center, Dr. Paul J. Barr, and  patients and clinicians from St. Johnsbury.\n",
    techStack: ["https://img.shields.io/badge/react_native-191970.svg?style=for-the-badge&logo=react&logoColor=white",
      "https://img.shields.io/badge/firebase-%23007ACC.svg?style=for-the-badge&logo=firebase&logoColor=white",
      "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=white"
    ],
    techs: "React, Redux, Cloud Firestore, JavaScript, TypeScript",
    color: "#DFDFDF",
    key: 0
  },
  {
    title: "Dart Schedule",
    dates: "Sep 2022 - Present",
    partners: "Personal Project, Dartmouth College",
    img: "/images/dcal.png",
    description: "Full-stack React, JavaScript web application to automatically schedule team meetings/events for busy college students and reduce planning time by >70%. \n The Node.js backend wraps the Dartmouth Directory lookup website to suggest attendees and fetches exsiting calendar availability using TCP/IP networking for the Google Calendar API. \n I wrote the search algorithm to compute the most recent available time block between groups and added functionality for creation, approval & invitation to Google Cal events. View the Github repository ",
    link: "https://github.com/nitya308/cal-schedule",
    techStack: ["https://img.shields.io/badge/reactjs-191970.svg?style=for-the-badge&logo=react&logoColor=white",
      "https://img.shields.io/badge/javascript-%23121011.svg?style=for-the-badge&logo=javascript&logoColor=white",
      "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/node.js-%23239120.svg?style=for-the-badge&logo=nodedotjs&logoColor=white",
      "https://img.shields.io/badge/yarn-6C3483.svg?style=for-the-badge&logo=yarn&logoColor=white",
      "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white"
    ],
    techs: "React, Redux, JavaScript, TypeScript, Node.js, Yarn, Express.js",
    color: "#EFEFEF",
    key: 1
  },
  {
    title: "Search Engine in C",
    dates: "Jan 2022 - Mar 2022",
    partners: "CS50: Software Design & Implementation",
    img: "/images/searchengine.png",
    description: "Built a 3 part system: crawler, indexer and querier in C to crawl web given a starter url and save the results in HTML files with 98% accuracy. It handles ‘and’, ‘or’ query operators. I also implemented a hashtable, set & counter data structures in C from scratch to support functions. View the reporsitory and further implementation details ",
    link: "https://github.com/nitya308/search-engine",
    techStack: ["https://img.shields.io/badge/c-191970.svg?style=for-the-badge&logo=c&logoColor=white",
      "https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"],
    techs: "C, Shell Script",
    key: 2
  },
  {
    title: "Nuggets Game",
    dates: "Jan 2022 - Mar 2022",
    partners: "CS50: Software Design & Implementation",
    img: "/images/nuggets.png",
    description: "Nuggets is a multi-client game, in which players explore a set of rooms and passageways in search of gold nuggets. We designed the server and the client for this project in C. Players move around a map where each room is revealed to them when they enter it and collect gold nuggets by stepping on piles. If a player occupies another player’s spot they are swapped. Our code handles everything, from player joining, moving, leaving and winning to managing gold distribution. View the code ",
    link: "https://github.com/nitya308/nuggets-game",
    techStack: ["https://img.shields.io/badge/c-191970.svg?style=for-the-badge&logo=c&logoColor=white",
      "https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white",
      "https://img.shields.io/badge/bash-5B2C6F.svg?style=for-the-badge&logo=linux&logoColor=white"],
    techs: "C, Shell Script, Bash",
    color: "#EFEFEF",
    key: 3
  },
  {
    title: "Student VolunteerMatch",
    dates: "Mar 2020 - Sep 2021",
    partners: "personal mid-quarantine project",
    img: "/images/StudentVolunteer.png",
    description: "A mid-lockdown project to help students at my school complete their community service requirements by matching them to projects in the neighborhood. I designed and coded this one myself. It’s a customisation engine with a quiz that takes in a student’s interests, skills and time frame and outputs resulting recommendations for volunteer projects. Deployed ",
    link: "https://nitya308.github.io/index.html",
    techStack: [
      "https://img.shields.io/badge/html5-015DAD.svg?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/css3-191970.svg?style=for-the-badge&logo=css3&logoColor=white",
      "https://img.shields.io/badge/javascript-6C3483.svg?style=for-the-badge&logo=javascript&logoColor=white"],
    color: "#E8E8E8",
    techs: "HTML5, CSS3, JavaScript, JQuery",
    key: 4
  },
];

export default projects;