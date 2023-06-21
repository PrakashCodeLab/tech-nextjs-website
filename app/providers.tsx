"use client"
import { ThemeProvider } from 'next-themes'
import React  ,{ReactNode} from 'react';


interface ProviderLayoutProps{
   children: ReactNode
}

const Providers:React.FC<ProviderLayoutProps> = ({children}) => {
  return (
    <ThemeProvider attribute='class'>
           {children}
    </ThemeProvider>
  );
}

export default Providers;
