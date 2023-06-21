import React from 'react';
import website1 from "public/website-1.jpg";
import  website2 from "public/website-2.jpg";
import  website3 from "public/website-3.jpg";
import  website4 from "public/website-4.jpg";
import Image from 'next/image';
import { Buttons } from '@/components';
import {BlogSec2} from '@/components';
const Projectthree = () => {
  return (
    <section className='w-full flex  justify-around items-center gap-5 flex-col'>
       <BlogSec2 Img={website1} title={"Tech Startups Unleashed"} desc={"Tech startups are redefining entrepreneurship with their bold ideas, relentless drive, and innovative solutions.These trailblazing ventures leverage technology to create disruptive products and services that challenge the status quo. "}/>
       <BlogSec2 Img={website2} title={"Pioneering the Future"} desc={"Tech startups are leading a renaissance, pushing the boundaries of technology and forging a path towards an innovative future.These visionary companies embrace emerging technologies to solve complex problems and create new opportunities."}/>
       <BlogSec2 Img={website3} title={" Trailblazing Innovation"} desc={"Tech startups are trailblazers, propelling innovation forward with their disruptive ideas and groundbreaking solutions . These agile companies challenge conventional norms, driving positive change in various industries through their inventive approaches."}/>
       <BlogSec2 Img={website4} title={"Empowering Change"} desc={"Tech startups are on the rise, empowering transformative change through their visionary leadership and groundbreaking technologies."}/>

     
    </section>
  );
}

export default Projectthree;
