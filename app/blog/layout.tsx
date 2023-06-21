import React from 'react';

const layoutBlog = ({children}) => {
  return (
    <div>
        <h1 className='mt-5 uppercase text-4xl   font-extrabold '>our blog </h1>
      {children}
    </div>
  );
}

export default layoutBlog;
