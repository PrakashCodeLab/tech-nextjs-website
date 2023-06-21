import React from 'react';
import Styles from "./contact.module.scss";
import Image from 'next/image';
import ContactImg from '/public/contact.png'
import { Buttons } from '@/components';



const Contact = () => {
  return (
    <section className={Styles.contact__container} >
        <div className={Styles.contact__heading}>let's keep in touch</div>
        <div className={Styles.contact__form__section}>
          <div className={Styles.contact__img__container}>
            <Image className={Styles.img__contact} src={ContactImg} alt="contact form" />
          </div>
          <div className={Styles.contact__form__section}>
             <form className={Styles.contact__form} action="">
               <input type="text" className={Styles.contact__form__name} placeholder='name' />
               <input type="email" className={Styles.contact__form__name} placeholder='email' />
               <textarea name="message" id="message" className={Styles.contact__textArea} placeholder='message' cols={30} rows={10}></textarea>

               <Buttons title={"send"} url={"/contact"} styleName={"contact__form__button"}/>
             </form>
          </div>
        </div>
    </section>
  );
}

export default Contact;
