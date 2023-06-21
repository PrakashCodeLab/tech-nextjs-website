"use client";

import React from 'react';
import Styles from"./Darkmode.module.scss";
import {BsSunFill,BsMoonStarsFill} from "react-icons/bs";
import { useTheme } from 'next-themes'

const DarkMode = () => {

    const {theme , setTheme} = useTheme();
  return (
    <div className={Styles.toggleBar}>
         <span><BsMoonStarsFill onClick={()=>setTheme("dark")}/></span>
         <span><BsSunFill  onClick={()=>setTheme("light")}/></span>
         
    </div>
  );
}

export default DarkMode;
