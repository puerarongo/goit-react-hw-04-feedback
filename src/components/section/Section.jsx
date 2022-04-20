import React from "react";
import styles from "./Section.module.css";

const Section = ({title, children}) => {
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </>
    )
};

export default Section;