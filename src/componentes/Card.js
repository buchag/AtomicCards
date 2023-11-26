import React from 'react';
import Button from './Button';
import styles from './Card.module.css'; // Importa los estilos CSS

const Card = ({ image, title, description, link, buttonsData }) => {
  const handleClick = () => {
    // Abrir el enlace en una nueva pestaña cuando se hace clic en la tarjeta
    window.open(link, '_self'); 
  };
  return (
    <div className={styles.card}  onClick={handleClick}>
        <img className = {styles.image} src={image} alt={title} />
        <h2 className={styles.title}>{title}</h2>       
        <div>
            <div className= {styles.buttons}> 
              {buttonsData.map((button, index) => (
                <Button
                  key={index}
                  text={button.text}
                  bgColor={button.bgColor}
                  isVisible={button.visible}
                />
              ))}
            </div>
        </div>
        <p className = {styles.description}> {description}</p>
    </div>
  );
};

export default Card;