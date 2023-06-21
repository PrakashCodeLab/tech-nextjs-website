import React from 'react';
import illustrationImg1 from "public/illustration1.jpg";
import illustrationImg2 from "public/illustration2.jpg";
import illustrationImg3 from "public/illustration3.jpg";
import illustrationImg4 from "public/software3.jpg";
import illustrationImg5 from "public/illustration5.jpg";
import illustrationImg6 from "public/illustration6.jpg";
import Image from 'next/image';
import { Buttons } from '@/components';


const BlogItems =[
           {title:"The Power of Virtual Reality",description:"Immerse yourself in the world of virtual reality (VR) and discover how this rapidly advancing technology is reshaping the entertainment industry, revolutionizing training and simulations, and creating new avenues for immersive experiences." , img:illustrationImg1  ,btn:<Buttons  title={"see more"} styleName={""} url={""}/>},

           {title:"The Internet of Things (IoT) Revolution",description:" Explore the transformative impact of the Internet of Things (IoT) as we delve into the interconnected ecosystem of smart devices, intelligent sensors, and data-driven automation, revolutionizing industries and enhancing our daily lives" , img:illustrationImg2 ,btn:<Buttons  title={"see more"} styleName={""} url={""}/>},



           {title:"Machine Learning Demystified",description:"Demystify the world of machine learning as we delve into the fundamentals of algorithms, explore real-world applications in image recognition and natural language processing, and discuss the ethical considerations surrounding AI" , img:illustrationImg3 ,btn:<Buttons  title={"see more"} styleName={""} url={""}/>},



           {title:"Harnessing the Power of Big Data",description:"Uncover the immense potential of big data analytics, and how businesses are leveraging this vast resource to gain valuable insights, make informed decisions, and drive innovation across various sectors" , img:illustrationImg4  ,btn:<Buttons  title={"see more"} styleName={""} url={""}/>},



           {title:"The Future of Augmented Reality",description:"Step into the realm of augmented reality (AR) and explore how this emerging technology is reshaping industries, from gaming to education, by enhancing user experiences and bridging the gap between the physical and digital worlds Harnessing the Power of Big Data: Driving Insights and Innovation" , img:illustrationImg5  ,btn:<Buttons  title={"see more"} styleName={""} url={""}/>},



           {title:"Cybersecurity in the Modern Era",description:"Gain insights into the evolving landscape of cybersecurity, the challenges faced in safeguarding sensitive data, and the cutting-edge technologies and strategies being employed to protect privacy in today's interconnected world." , img:illustrationImg6  ,btn:<Buttons  title={"see more"} styleName={""} url={""}/>},


]



const ProjectOne = () => {
  return (
    <section className='w-full min-h-full flex justify-around items-center gap-3 flex-col'>{
      BlogItems.map((items ,index)=>(

  <div key={index} className={`w-[100%]   gap-10 flex items-center justify-center  p-3 max-md:mb-4`}>
        <div className={`flex md:flex-row  flex-col justify-start items-start gap-8  ${ index % 2 === 0 ? "flex-row-reverse": "flex-row" }`}>
          <div className=' flex-1 w-[100%]'>
            <Image
              src={items.img}
              alt='Blog'
              className='w-full h-auto rounded-lg'
            />
          </div>
          <div className=' flex-1 max-md:w-[100%]'>
            <h3 className='text-3xl max-md:text-[1.3rem]  font-bold dark:text-white uppercase text-blue-900 '>{items.title}</h3>
            <p className='dark:text-white max-md:text-sm text-slate-950 mt-4 mb-8 max-md:mb-4'>
             {items.description}
            </p>
            {items.btn}
          </div>
        </div>
      </div>

      )
           
      ) 
    
      

     
}</section>
  );
}

export default ProjectOne;


/* */