import localise from "../../../assets/img/localise.png";
import todoapp from "../../../assets/img/todoapp.png";
import companyManager from "../../../assets/img/company-manage.png";

const projects = [
  {
    id: 1,
    img: localise,
    title: "Localise",
    description:
      "Responsive single page layout. All styles in the project are built on SCSS. JS was used for the burger menu.",
    tech: ["HTML", "SCSS", "JS", "Gulp"],
    github: "https://github.com/MyroslavKop/localise",
    preview: "https://myroslavkop.github.io/localise/",
  },
  {
    id: 2,
    img: todoapp,
    title: "ToDo App",
    description:
      "React app. The user can add, edit and delete tasks. Tasks can be added by category: personal, business, or uncategorized. There is a progress bar that tracks the percentage of completed tasks. Tasks are stored in local storage. The application is built on the MaterialUI base. Responsive.",
    tech: ["React", "MaterialUI", "Webpack"],
    github: "https://github.com/MyroslavKop/todo-app",
    preview: "https://lucky-salmiakki-d7055f.netlify.app/",
  },
  {
    id: 3,
    img: companyManager,
    title: "Company Manager",
    description:
      "Full-stack app. App for manage user companies. Implemented registration and authorization through a token. Role system (user and admin). \n" +
      "The user can create, delete and edit their companies. Admin can get a list of all companies in the system (with the ability to edit) and a list of all users. Core technologies: server - NodeJS, Express, Sequelize; client - React, Material UI, Redux. Responsive.",
    tech: [
      "React",
      "React-Router",
      "MaterialUI",
      "Redux",
      "Redux-Thunk",
      "NodeJS",
      "Express",
      "Sequelize",
    ],
    github: "https://github.com/MyroslavKop/company-manage",
  },
];

export default projects;
