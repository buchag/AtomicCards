
import React from 'react';
import CardsContainer from './componentes/CardsContainer';
import styles from './componentes/Card.module.css'
function App() {
  return (
    <div className={styles.App}>
      <CardsContainer />
    </div>
  );
}

export default App;