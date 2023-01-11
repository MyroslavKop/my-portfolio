import { motion } from "framer-motion";
import styles from "./About.module.scss";
import { basicAnimation } from "../../../animations";
import MLinkButton from "../../LinkButton/LinkButton";
import MLinks from "./Links/Links";
import photo from "../../../img/my-photo.png";
import CV from "../../../pdf/CV_FrontEnd_Myroslav Kopytov.pdf";

const About = () => {
  return (
    <motion.section
      className={styles.about}
      initial="hidden"
      whileInView="visible"
      id="about"
      viewport={{ once: true }}
    >
      <div className={styles.info}>
        <motion.div
          className={styles.title}
          custom={2}
          variants={basicAnimation}
        >
          Hi, <span>I&apos;m</span>
        </motion.div>
        <motion.h1
          className={styles.title_main}
          custom={3}
          variants={basicAnimation}
        >
          Myroslav Kopytov
        </motion.h1>
        <motion.h2
          className={styles.title_secondary}
          custom={4}
          variants={basicAnimation}
        >
          Front End Developer
        </motion.h2>
        <div className={styles.text_block}>
          <motion.p custom={5} variants={basicAnimation}>
            I am a beginner frontend developer from Odessa, Ukraine. I am
            looking for a team where I can show my creativity and potential. On
            this page you can find more information about my works and tech
            stacks. Also i will update it as fast as i&apos;ll creat a new
            sites.
          </motion.p>
        </div>
        <MLinkButton
          custom={6}
          variants={basicAnimation}
          href={CV}
          download="CV_FrontEnd_Myroslav Kopytov"
        >
          Download CV
        </MLinkButton>
        <MLinks custom={7} variants={basicAnimation} />
      </div>
      <motion.div custom={3} variants={basicAnimation} className={styles.image}>
        <img src={photo} alt="headshot" />
      </motion.div>
    </motion.section>
  );
};
export default About;
