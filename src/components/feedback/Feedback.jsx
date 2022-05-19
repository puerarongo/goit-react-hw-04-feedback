import React from "react";
import PropTypes from 'prop-types';
import styles from "./Feedback.module.css";

const Feedback = ({options, func}) => {
    return (
        <div className={styles.container}>
            {options.map((elem, i, arr) => { 
                return <button key={arr.indexOf(elem)} className={styles.button} type="button"
                    onClick={() => func({type: elem})}>{elem}</button>
            })} 
        </div>
    )
};

Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};

export default Feedback;