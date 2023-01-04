import styles from "./Skills.module.scss";
import {motion} from "framer-motion";
import icons from "./data";

const animation = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
};
const iconAnimation = {
    hidden: {
        y: 10,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.1}
    })
};

const Skills = () => {
    return (
        <motion.section className={styles.skills} initial="hidden" whileInView="visible" id="skills">
            <motion.h2 className={styles.title} custom={1} variants={animation}>Skills</motion.h2>
            <motion.p className={styles.text} custom={2} variants={animation}>Technologies I’ve been working with recently</motion.p>
            <div className={styles.div}>
                {icons.map((item, index) => {
                    return (
                        <motion.div custom={index} variants={iconAnimation} className={styles.img__block}  key={item.id}><img className={styles.img} src={item.icon}/></motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default Skills;