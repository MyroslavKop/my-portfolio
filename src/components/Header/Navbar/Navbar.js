import { motion } from "framer-motion";
import styles from "./Navbar.module.scss";
import logo from "../../../img/icons/logo.svg";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";

const Navbar = () => {
  return (
    <motion.nav
      className={styles.navbar}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={styles.image}>
        <img src={logo} alt="logo" />
      </div>
      <Desktop />
      <Mobile />
    </motion.nav>
  );
};

export default Navbar;
