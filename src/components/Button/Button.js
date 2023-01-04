import styles from "./Button.module.scss"
import {motion} from "framer-motion"
import {forwardRef} from "react";

export const Button = forwardRef(({children}, ref) => {
    return (
        <a className={styles.a} ref={ref}>{children}</a>
    )
})
export const MButton = motion(Button);