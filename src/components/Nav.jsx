import React, { useEffect, useState } from 'react'
import { RiMenuFill } from "@remixicon/react";
import { RiShoppingCart2Line } from "@remixicon/react";
import { motion } from 'framer-motion';

const Nav = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)
  
  const handleScroll = () => {
      const currentScrollPos = window.scrollY
  
      if(currentScrollPos > prevScrollPos){
          setVisible(false)
      }else{
          setVisible(true)
      }
  
      setPrevScrollPos(currentScrollPos)
  }
  
  useEffect( () => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <motion.div id='nav'  initial={{
      opacity: 0,
      y:"-100%"
    }}
    animate={{
      opacity: 1,
      y: visible ? "0%" : "-100%"
    }}>
    <div id='naav-part1'>
        <h1 className='font-extrabold text-[1.5vw]'>S.R</h1>
    </div>
     <div id="nav-part2">
            <div id="links">
                <motion.a initial={{background:"#F7F7F7"}} whileHover={{color:"black", background:"#7e7d7d", height:"10vw", width:"14vw", padding:"1.1vw", borderRadius:"30px"}} className='' href="#">Shop</motion.a>
                <motion.a initial={{background:"#F7F7F7"}} whileHover={{color:"black", background:"#7e7d7d", height:"10vw", width:"14vw", padding:"1.1vw", borderRadius:"30px"}} className='' href="#">Catering</motion.a>
                <motion.a initial={{background:"#F7F7F7"}} whileHover={{color:"black", background:"#7e7d7d", height:"10vw", width:"14vw", padding:"1.1vw", borderRadius:"30px"}} className='' href="#">Donate</motion.a>
            </div>
            <motion.div id="icons">
               <RiMenuFill className='i'/>
                <RiShoppingCart2Line className='i'/>
            </motion.div>
        </div>

    </motion.div>
  )
}

export default Nav