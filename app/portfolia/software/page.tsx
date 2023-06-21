import React from 'react';
import softwareImg1 from "public/software1.jpg";
import  softwareImg2 from "public/software2.jpg";
import  softwareImg3 from "public/software3.jpg";
import Image from 'next/image';
import { BlogSec3, Buttons } from '@/components';

const Projecttwo = () => {
  return (
    <section className='w-full flex justify-around items-center gap-3 flex-col'>
     <BlogSec3 Img={softwareImg1} blogTitle={"Disrupting Industries"} blogDesc={"  Explore the cutting-edge advancements and breakthrough innovations driving the future of artificial intelligence (AI) in this blog, as we delve into the transformative potential of AI across various industries and its impact on our daily lives."}/>
     <BlogSec3 Img={softwareImg2} blogTitle={"Future of AI: Innovations"} blogDesc={" the tech startup scene is experiencing a significant boom. These innovative ventures are disrupting traditional industries and reshaping the way we live and work. With a focus on agility, adaptability, and groundbreaking solutions, tech startups are leveraging cutting-edge technologies such as artificial intelligence, blockchain, and the Internet of Things to create transformative products and services."}/>
     <BlogSec3 Img={softwareImg3} blogTitle={"Cybersecurity Trends: Evolving Threats"} blogDesc={" Stay informed about the latest trends and evolving threats in the cybersecurity landscape through this blog, as we uncover the emerging techniques used by hackers, discuss strategies to protect sensitive data, and explore the role of AI and machine learning in enhancing cybersecurity defenses."}/>

   
    </section>
  );
}

export default Projecttwo;
