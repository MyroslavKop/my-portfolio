import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <About />
    </header>
  );
};

export default Header;
