import Skills from "./Skills/Skills"
import Works from "./Works/Works"
import styles from "./Main.module.scss"
const Main = () => {
    return (
        <main className={styles.main}>
            <Skills/>
            <Works/>
        </main>
    )
}
export default Main;