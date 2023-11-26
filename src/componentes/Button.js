import React from 'react';
import styles from './Button.module.css'

const Button = ({ text, bgColor, isVisible }) => {
  const buttonStyles = {
    backgroundColor: bgColor,
    display: isVisible ? 'flex' : 'none',
    color: 'white',
  };

  return (
    <button style={buttonStyles} className={styles.boton}>
      {text}
    </button>
  );
};

export default Button;