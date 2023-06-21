import React ,{ReactNode} from 'react';

interface BlogProps {
  children: ReactNode;
}


const layoutBlog:React.FC<BlogProps> = ({children}) => {
  return (
    <div>
        <h1 className='mt-5 uppercase text-4xl   font-extrabold '>our blog </h1>
      {children}
    </div>
  );
}

export default layoutBlog;
