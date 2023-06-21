import React from 'react';
import Styles from './portfolia.module.scss';
import Image from 'next/image';
import Illustration from "public/illustration.png";
import Websites from "public/websites.jpg";
import AppsImg from "public/apps.jpg";
import Link from 'next/link';

const Portfolia = () => {
   
  return (
    

   
    
     <div className={Styles.portfolia__project__section}>
       <h4 className={Styles.portfolia__project__lead}>choose a gallery</h4>
       <div className={Styles.portfolia__project__image__section}>
          <Link href="/portfolia/illustrations" className={Styles.portfolia__image__container}>
            <Image className={Styles.img} src={Illustration} alt="illustrations"/>
            <h6 className={Styles.lead}>illustrations</h6>
          </Link>
          <Link href={"/portfolia/websites"} className={Styles.portfolia__image__container}> 
            <Image className={Styles.img} src={Websites} alt="illustrations"/>
            <h6 className={Styles.lead}>websites</h6>
          </Link>
          <Link href={"/portfolia/software"} className={Styles.portfolia__image__container}>
            <Image className={Styles.img} src={AppsImg} alt="illustrations"/>
            <h6 className={Styles.lead}>apps</h6>
          </Link>
       </div>
     </div>
   
  );
}

export default Portfolia;
