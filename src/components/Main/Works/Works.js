import { motion } from "framer-motion";
import styles from "./Works.module.scss";
import { basicAnimation } from "../../../animations";
import { MProject } from "./Project/Project";
import projects from "./data";

const Works = () => {
  return (
    <motion.section
      className={styles.works}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      id="works"
    >
      <motion.h2 className={styles.title} custom={1} variants={basicAnimation}>
        My works
      </motion.h2>
      <motion.p
        className={styles.description}
        custom={2}
        variants={basicAnimation}
      >
        Things I’ve built so far
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className={styles.projects}
      >
        {projects.map(
          ({ title, description, preview, img, github, id, tech }, index) => (
            <MProject
              custom={index + 1}
              variants={basicAnimation}
              key={id}
              title={title}
              description={description}
              preview={preview}
              img={img}
              github={github}
              tech={tech}
            />
          )
        )}
      </motion.div>
    </motion.section>
  );
};

export default Works;
