import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.link}
        href="https://github.com/MyroslavKop/my-portfolio"
        target="_blank"
        rel="noreferrer"
      >
        Designed & Built by Myroslav Kopytov
      </a>
    </footer>
  );
};

export default Footer;
