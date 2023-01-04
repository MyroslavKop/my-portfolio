import localise from "../../../img/localise.png";
import todoapp from "../../../img/todoapp.png";

const projects = [
    {
        id: 1,
        img: localise,
        title: "Localise",
        description: "Responsive single page layout. All styles in the project are built on SCSS. JS was used for the burger menu.",
        tech: ["HTML", "SCSS", "JS", "Gulp"],
        github: "https://github.com/MyroslavKop/localise",
        preview: "https://myroslavkop.github.io/localise/"
    },
    {
        id: 2,
        img: todoapp,
        title: "ToDo App",
        description: "React app. The user can add, edit and delete tasks. Tasks can be added by category: personal, business, or uncategorized. There is a progress bar that tracks the percentage of completed tasks. Tasks are stored in local storage. The application is built on the MaterialUI base. Responsive.",
        tech: ["React", "MaterialUI", "Webpack"],
        github: "https://github.com/MyroslavKop/todo-app",
        preview: "https://lucky-salmiakki-d7055f.netlify.app/"
    },
];

export default projects;