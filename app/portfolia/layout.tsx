import React from 'react';
import Styles from './portfolia.module.scss';


const PortfoliaContainer = ({children}) => {
  return (
    <section className={Styles.portfolia__section}>
        <h2 className={Styles.portfolia__heading}>our works</h2>
      {children}
    </section>
  );
}

export default  PortfoliaContainer;
