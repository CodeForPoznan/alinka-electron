import React from 'react';
import styles from './Button.scss';

const buttonActive = `${styles.sideButton} ${styles.active}`;

const Button = (props) => (

    <button 
        onClick={props.click}
        className={props.active ? buttonActive : styles.sideButton}>
           Utwórz dokument
    </button>
);

export default Button;

