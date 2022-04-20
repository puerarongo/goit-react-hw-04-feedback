import React from "react";
import styles from "./Notification.module.css";

const Notification = ({message}) => {
    return (
        <>
            <div className={styles.notice}><p>{message}</p></div>
        </>
    )
};

export default Notification;