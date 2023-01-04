import styles from "./About.module.scss";
import {motion} from "framer-motion";
import {MButton} from "../../Button/Button";
import Links from "./Links/Links";
import photo from "../../../img/my-photo.png";

const animation = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.20}
    })
};

const About = () => {
   return (
       <motion.section className={styles.about} initial="hidden" whileInView="visible" id="about">
           <div className={styles.info}>
               <motion.div className={styles.div} custom={2} variants={animation}>Hi, <span>I'm</span></motion.div>
               <motion.h1 className={styles.title__main} custom={3} variants={animation}>Myroslav Kopytov</motion.h1>
               <motion.h2 className={styles.title__secondary} custom={4} variants={animation}>Front End Developer</motion.h2>
               <div className={styles.text__block}>
                   <motion.p custom={5} variants={animation}> I am a beginner frontend
                       developer
                       with 1 year of experience. I live in Ukraine, the city of Odessa.
                   </motion.p>
               </div>
               <MButton custom={6} variants={animation}>Download CV</MButton>
               <Links/>
           </div>
           <motion.div custom={1} variants={animation} className={styles.img__block}>
               <img className={styles.img} src={photo}/></motion.div>
       </motion.section>
   )
}
export default About;