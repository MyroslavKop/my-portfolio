import { motion } from "framer-motion";
import { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./LinkButton.module.scss";

const LinkButton = forwardRef(({ children, href, download }, ref) => {
  return (
    <a className={styles.a} ref={ref} href={href} download={download}>
      {children}
    </a>
  );
});
const MLinkButton = motion(LinkButton);
export default MLinkButton;

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  download: PropTypes.string,
};
