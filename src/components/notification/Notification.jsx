import React from "react";
import PropTypes from 'prop-types';
import styles from "./Notification.module.css";

const Notification = ({message}) => {
    return (
        <>
            <div className={styles.notice}><p>{message}</p></div>
        </>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};

export default Notification;