"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import Styles from './Navbar.module.scss';
import DarkMode from '../DarkMode/DarkMode';
import { useTheme } from 'next-themes';
import {GiHamburgerMenu} from "react-icons/gi"
import {CiCircleRemove}from "react-icons/ci"
import MobileNav from './MobileNav';
const Links =[
    {id:0, title:<DarkMode/>,url:"/"},
    { id:1, title:"Home", url:"/"},
    { id:2, title:"Portfolia", url:"/portfolia"},
    { id:3, title:"Blog", url:"/blog"},
    { id:4, title:"About", url:"/about"},
    { id:5, title:"Contact", url:"/contact"},
  



]




const Navbar = () => {

      const [icon ,setIcon ]=useState(false);
      const [navbar ,setNavbar] = useState(false);
       const [linkClick ,setLinkClick] = useState(false);
      const HandleChange=()=>{
        setIcon(!icon);
        setNavbar(!navbar)
      }

      const handleLinkClick=()=>{
        setIcon(false);
        setNavbar(!navbar)
      };


  return (
    <nav className={Styles.navbar}>
        <div className={Styles.navbar__body}>
        <Link className={Styles.link} href="/">tech blog</Link>
        </div>

        <div className={`${Styles.navbar__linksection}` }>
            {
                Links.map((item ,i )=>{
                    return (
                        <Link className={Styles.linkItems} key={item.id} href={`${item.url}`}>{item.title}</Link>
                    )
                })
            }
            <button
               className={Styles.button}
               onClick={()=>{
               
               }}
            >log out</button>
        </div>

        <div  onClick={HandleChange} className="hamburger__section cursor-pointer lg:hidden  w-[50px] h-[50px]">
        {
            icon? <CiCircleRemove  className='w-[100%] h-[100%] '/>  : <GiHamburgerMenu className='w-[100%] h-[100%] '/> 
        }
        </div>

        {
           navbar&&( <div className={`${Styles.mobile__navbar__section} bg-gray-900`}>
           <div className={Styles.mobile__darkmode}>
             <DarkMode />
           </div>
           <ul className={Styles.list__section}>
             <Link href="/" className={Styles.link} onClick={handleLinkClick}>
               home
             </Link>
             <Link href="/portfolia" className={Styles.link} onClick={handleLinkClick}>
               portfolia
             </Link>
             <Link href="/blog" className={Styles.link} onClick={handleLinkClick}>
               blog
             </Link>
             <Link href="/about" className={Styles.link} onClick={handleLinkClick}>
               about
             </Link>
             <Link href="/contact" className={Styles.link} onClick={handleLinkClick}>
               contact
             </Link>
           </ul>
         </div>)
        }
       
    </nav>
  );
}

export default Navbar;
