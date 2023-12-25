import React from 'react'
import vi from "../assets/video.mp4"
import { motion } from "framer-motion"
const Page1 = () => {
  return (
    <> 
    <motion.div id="page1" initial={{opacity:0}} whileInView={{opacity:1}}>
    <motion.h1 initial={{y:200,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.4}} className='ml-[13vw]' >Change</motion.h1>
    <motion.h1 initial={{y:200,opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay:0.4,duration:0.4}} >the course</motion.h1>
    <motion.div initial={{y:200,opacity:0.3,scale:0.3}} whileInView={{y:0, opacity:1,scale:1}} transition={{delay:0.3,duration:0.7}}  id="video-container">
        <div id="play">PLAY</div>
        <video muted  autoPlay loop  >
      <source src={vi} type="video/mp4"/>
    </video>
    </motion.div>
</motion.div>
<motion.div className='relative' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.8,duration:1}}>
  <div className=' flex gap-[88.2vw] pl-[1.3vw] pr-[1.3vw] absolute top-[-1.3vw] uppercase font-medium'>
    <span >Buy Good</span>
    <span>Do Good</span>
  </div>
<hr className='h-[0.14vw] w-[100%] bg-black mt-[5vw]' />
</motion.div>

</>

  )
}

export default Page1