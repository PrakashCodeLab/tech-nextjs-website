import React from 'react';
 // Replace with your actual image path
import Image from 'next/image';
import Styles from './BlogSec.module.scss';

const BlogSec = ({title , desc ,img}) => {
  return (
    <div className={Styles.blog__container}>
        <div className={Styles.blog__image}>
        <Image src={img} alt="Blog" />
      </div>
      <div className={Styles.blog__content}>
        <h2 className={Styles.blog__title}>{title}</h2>
        <p className={`${Styles.blog__description} dark:text-white text-blue-800 `}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default BlogSec;
