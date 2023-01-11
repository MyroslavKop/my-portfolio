import { Link } from "react-scroll";
import { motion } from "framer-motion";
import styles from "./Desktop.module.scss";
import { navbarAnimation } from "../../../../animations";

const Desktop = () => {
  return (
    <ul className={styles.desktop_list}>
      <motion.li custom={1} variants={navbarAnimation}>
        <Link to="about" spy smooth offset={50} duration={500}>
          ABOUT MY
        </Link>
      </motion.li>
      <motion.li custom={2} variants={navbarAnimation}>
        <Link to="skills" spy smooth offset={50} duration={500}>
          SKILLS
        </Link>
      </motion.li>
      <motion.li custom={3} variants={navbarAnimation}>
        <Link to="works" spy smooth offset={50} duration={500}>
          MY WORKS
        </Link>
      </motion.li>
      <motion.li custom={4} variants={navbarAnimation}>
        <Link to="contact" spy smooth offset={50} duration={500}>
          CONTACT
        </Link>
      </motion.li>
    </ul>
  );
};

export default Desktop;
