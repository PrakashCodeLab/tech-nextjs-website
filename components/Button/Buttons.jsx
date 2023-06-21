import Link from 'next/link';
import React from 'react';
import Styles from "./buttons.module.scss";


const Buttons = ({title,url ,styleName}) => {
  return (
    <Link className={`Styles.btn__${styleName} ${Styles.btn} `} href={url}>
       <button  type='button'>{title}</button>
    </Link>
  );
}

export default Buttons;
