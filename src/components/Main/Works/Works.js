import styles from "./Works.module.scss";
import {motion} from "framer-motion";
import projects from "./data";

const animation = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.1}
    })
};
const projectAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.5}
    })
};


const Works = () => {
    return (
        <motion.section className={styles.works} initial="hidden" whileInView="visible" id="works">
            <motion.h2 className={styles.title} custom={1} variants={animation}>My works</motion.h2>
            <motion.p className={styles.subtitle} custom={2} variants={animation}>Things I’ve built so far</motion.p>
            <div className={styles.container}>
                {projects.map(({id, img, title, tech, description, preview, github}, index) => {
                    return (
                        <motion.div className={styles.project} key={id} custom={index} variants={projectAnimation}>
                            <div>
                                <div className={styles.project__imgBlock}><img className={styles.project__img} src={img}/></div>
                                <h3 className={styles.project__title}>{title}</h3>
                                <p className={styles.project__description}>{description}</p>
                            </div>
                                <div className={styles.project__list}>
                                    <ul className={styles.project__tech}>
                                        {tech.map((item, index) => <li key={index}>{item}</li>)}
                                    </ul>
                                    <ul className={styles.project__links}>
                                        <li className={styles.link}><a href={preview}>Live preview</a></li>
                                        <li><a href={github}>
                                            <svg className={styles.svg} width="30" height="30" viewBox="0 0 34 33" fill="currentColor"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.7381 0.333344C7.67448 0.333344 0.333374 7.67445 0.333374 16.738C0.333374 23.9971 5.02922 30.1284 11.5501 32.302C12.3703 32.4455 12.6779 31.9534 12.6779 31.5228C12.6779 31.1332 12.6574 29.8413 12.6574 28.4674C8.53572 29.2261 7.46942 27.4626 7.14133 26.5399C6.95677 26.0682 6.15704 24.6123 5.45984 24.2227C4.88568 23.9151 4.06544 23.1564 5.43934 23.1359C6.73121 23.1154 7.65397 24.3252 7.96156 24.8174C9.43798 27.2986 11.7962 26.6014 12.7394 26.1707C12.883 25.1044 13.3136 24.3867 13.7852 23.9766C10.1352 23.5665 6.32109 22.1516 6.32109 15.8768C6.32109 14.0928 6.95677 12.6164 8.00257 11.468C7.83853 11.0579 7.26436 9.37644 8.16662 7.12079C8.16662 7.12079 9.54051 6.69017 12.6779 8.80227C13.9903 8.43316 15.3847 8.24861 16.7791 8.24861C18.1735 8.24861 19.5679 8.43316 20.8803 8.80227C24.0177 6.66966 25.3916 7.12079 25.3916 7.12079C26.2938 9.37644 25.7197 11.0579 25.5556 11.468C26.6014 12.6164 27.2371 14.0723 27.2371 15.8768C27.2371 22.1721 23.4025 23.5665 19.7524 23.9766C20.3471 24.4893 20.8598 25.4735 20.8598 27.0115C20.8598 29.2056 20.8393 30.9691 20.8393 31.5228C20.8393 31.9534 21.1468 32.4661 21.9671 32.302C28.4469 30.1284 33.1428 23.9766 33.1428 16.738C33.1428 7.67445 25.8017 0.333344 16.7381 0.333344Z"
                                                />
                                            </svg>
                                        </a></li>
                                    </ul>
                                </div>
                        </motion.div>
                    )
                })}

            </div>
        </motion.section>
    );
};

export default Works;