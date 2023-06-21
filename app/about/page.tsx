import React from 'react';
import Styles from './about.module.scss'
import Image from 'next/image';
import AboutImg from '/public/software1.jpg'
import { Buttons } from '@/components';

const About = () => {
  return (
    <section className={`${Styles.about__container}`}>
        <div className={Styles.about__img__container}>

         <Image  className={Styles.aboutImg} src={AboutImg} alt="" />

         <div className={Styles.about__content}>

            <h4 className={Styles['about__head']}>digital storytellers</h4>
            <p className={Styles['about__lead']}>handcrafting award winning digital experiences</p>
         </div>
        </div>
       <div className={Styles.about__content__section}>
       <div className={Styles.about__left__section}>
          <h4 className={Styles.about__head}>who are we?</h4>
          <p className={Styles.about__lead}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, modi. Quis neque non eius ipsa dolorem modi, ullam repellat voluptate!z</p>

          <p className={Styles.about__lead}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quibusdam exercitationem, unde quia ut, ex quam distinctio error commodi doloremque harum fuga nisi nihil dolorum ad mollitia iusto provident sit? Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

          <p className={Styles.about__lead}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa laudantium sit ipsam! Saepe sit repellendus nulla amet blanditiis dicta iure enim. Cumque fugiat enim molestias, error obcaecati nobis aliquam.</p>
        </div>


        <div className={Styles.about__right__section}>
          <h4 className={Styles.about__head}>what we do?</h4>
          <p className={Styles.about__lead}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, adipisci unde cupiditate aliquid voluptatum laboriosam excepturi, deleniti aliquam suscipit mollitia tenetur assumenda ducimus quasi cum accusamus tempora eligendi molestias voluptas.</p>
           <ul className={Styles.about__list}>
            <li>- Lorem, ipsum dolor.</li>
            <li>- Inventore, impedit harum!</li>
            <li>- Consequuntur, eaque sint.</li>
           </ul>

          <Buttons title={"lets connect"} url={"/contact"} styleName={""}/>

        </div>

       </div>
       
    </section>
  );
}

export default About;
