import { Footer, Navbar } from '@/components'
import './globals.scss'
import Providers from './providers'


export const metadata = {
  title: 'personal blog ',
  description: 'personal blog website created by prakash ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark' style={{colorScheme:'dark'}}>
      
      <body className="dark:bg-gray-900 text-slate-800  dark:text-white">
        <Providers>
        <div className="container">
         <Navbar/>
        
        {children}
        
        <Footer/>
         </div>

      

        </Providers>
       
        
      
        </body>

        
    </html>
  )
}
