import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <Skills />
      <Works />
      <Contact />
    </main>
  );
};
export default Main;
