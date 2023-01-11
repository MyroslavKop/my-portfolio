import { motion } from "framer-motion";
import MLinkButton from "../../LinkButton/LinkButton";
import { basicAnimation } from "../../../animations";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <motion.section
      className={styles.contact}
      initial="hidden"
      whileInView="visible"
      id="contact"
      viewport={{ once: true }}
    >
      <motion.h2 className={styles.title} custom={1} variants={basicAnimation}>
        Get In Touch
      </motion.h2>
      <motion.p
        className={styles.description}
        custom={2}
        variants={basicAnimation}
      >
        I am looking for opportunities to implement my skills. If you like my
        work, I am ready to talk to you.
      </motion.p>
      <MLinkButton
        href="mailto:kopytovmiroslav@gmail.com"
        custom={3}
        variants={basicAnimation}
      >
        Say Hello
      </MLinkButton>
    </motion.section>
  );
};

export default Contact;
