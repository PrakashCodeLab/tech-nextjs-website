import React from 'react';
import Styles from './Footer.module.scss';
import Image from 'next/image';


const Footer = () => {


    const year=new Date();

    const currentYear = year.getFullYear();

  return (
    <footer className={Styles.footer}>
         <div className={Styles.footer__wrapper}>
             <p className={Styles.footer__lead}>&copy;<span className=''>{ currentYear}</span> tech blog all rights reserved</p>
            
            </div> 

          <div className={Styles.footer__logo}>
                <Image className={Styles.footer__img} src="/1.png" width={25} height={25}   alt='social media'/>
                <Image  className={Styles.footer__img}  src="/2.png" width={25} height={25}   alt='social media'/>
                <Image  className={Styles.footer__img}  src="/3.png" width={25} height={25}   alt='social media'/>
                <Image  className={Styles.footer__img}  src="/4.png" width={25} height={25}   alt='social media'/>
            </div>  
    </footer>
  );
}

export default Footer;
