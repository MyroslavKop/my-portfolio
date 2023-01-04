import styles from "./Navbar.module.scss";
import icon from "../../../img/icons/man-svgrepo-com.svg";
import {Link} from "react-scroll";
import Hamburger from "hamburger-react";
import {useState} from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <nav className={styles.nav}>
            <div className={styles.imgBlock}><img className={styles.img} src={icon}/></div>
            <ul className={styles.ul}>
                <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About me</Link></li>
                <li><Link to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
                <li><Link to="works" spy={true} smooth={true} offset={50} duration={500}>My works</Link></li>
            </ul>
            <div className={styles.div2}>
                <Hamburger onToggle={handleClick}/>
                {open &&
                    <div className={styles.div3}>
                        <nav className={styles.nav2}>
                            <ul>
                                <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About me</Link></li>
                                <li><Link to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
                                <li><Link to="works" spy={true} smooth={true} offset={50} duration={500}>My works</Link></li>
                            </ul>
                        </nav>
                    </div>}
            </div>
        </nav>
    );
};

export default Navbar;