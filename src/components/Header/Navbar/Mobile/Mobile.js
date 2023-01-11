import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import { useState, useRef, useEffect } from "react";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import styles from "./Mobile.module.scss";

const Mobile = () => {
  const [isOpen, setOpen] = useState(false);

  const ref = useRef();

  const handleClose = () => {
    setOpen(!isOpen);
  };

  useOnClickOutside(ref, () => setOpen(false));

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("body__active");
    } else {
      document.body.classList.remove("body__active");
    }
  }, [isOpen]);

  return (
    <div ref={ref} className={styles.mobile}>
      <div className={styles.hamburger}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#00bd95"
          size={38}
        />
      </div>
      <ul
        className={
          isOpen ? `${styles.mobile_list} ${styles.active}` : styles.mobile_list
        }
      >
        <li>
          <Link
            to="about"
            spy
            smooth
            offset={50}
            duration={500}
            onClick={handleClose}
          >
            ABOUT MY
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            spy
            smooth
            offset={50}
            duration={500}
            onClick={handleClose}
          >
            SKILLS
          </Link>
        </li>
        <li>
          <Link
            to="works"
            spy
            smooth
            offset={50}
            duration={500}
            onClick={handleClose}
          >
            MY WORKS
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy
            smooth
            offset={50}
            duration={500}
            onClick={handleClose}
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <div />
    </div>
  );
};

export default Mobile;
