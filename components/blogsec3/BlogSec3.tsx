import React from 'react';
import Image from 'next/image';
import Buttons from '../Button/Buttons';

const BlogSec3 = ({ Img, blogTitle, blogDesc }) => {
  return (
    <div className="h-[400px] border rounded-lg max-lg:h-auto p-[0.3rem] py-3  gap-6 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="w-full lg:flex-1">
          <Image src={Img} alt="Blog" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold dark:text-white max-md:text-lg uppercase  text-blue-800">{blogTitle}</h2>
          <p className="text-blue-800 dark:text-white mt-4 md:line-clamp-4 mb-8 capitalize">{blogDesc}</p>
          <Buttons title="See More" styleName="" url="" />
        </div>
      </div>
    </div>
  );
}

export default BlogSec3;
