import { motion } from "framer-motion";
import styles from "./Skills.module.scss";
import { basicAnimation, iconAnimation } from "../../../animations";
import icons from "./data";

const Skills = () => {
  return (
    <motion.section
      className={styles.skills}
      initial="hidden"
      whileInView="visible"
      id="skills"
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.h2 className={styles.title} custom={1} variants={basicAnimation}>
        Skills
      </motion.h2>
      <motion.p
        className={styles.description}
        custom={2}
        variants={basicAnimation}
      >
        Technologies I’ve been working with recently
      </motion.p>
      <div className={styles.block}>
        {icons.map(({ id, icon, description }, index) => {
          return (
            <motion.div
              custom={index}
              variants={iconAnimation}
              className={styles.image}
              key={id}
            >
              <img src={icon} alt={description} />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Skills;
