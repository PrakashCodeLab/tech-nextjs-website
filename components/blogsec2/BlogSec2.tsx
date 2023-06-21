import React from 'react';
import Image from 'next/image';
import Buttons from '../Button/Buttons';

const BlogSec2 = ({Img,title,desc}) => {
  return (
    <div className='w-[100%] h-[400px] max-lg:h-auto  flex flex-col justify-center items-center gap-9 p-[0.2rem]  '>
        <div className={ `  flex justify-start items-start  max-lg:flex-col`}>
          <div className='flex-1 max-lg:h-auto '>
            <Image
              src={Img}
              alt='Blog'
              className='w-full  object-cover  h-auto rounded-lg'
            />
          </div>
          <div className=' px-8 py-5 flex-1 flex justify-start  items-start flex-col'>
            <h2 className='text-2xl items-start font-bold uppercase dark:text-white   text-blue-900 max-md:text-base'>{title}</h2>
            <p className=' dark:text-white   items-start text-blue-900  mt-1 mb-4 line-clamp-3 capitalize '>
             {desc}
            </p>
            <Buttons  title={"see more"} styleName={""} url={""}/>
          </div>
        </div>
      </div>
  );
}

export default BlogSec2;
