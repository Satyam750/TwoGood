import { motion } from 'framer-motion'
import React from 'react'


const Page6 = () => {
  return (
    <motion.div id='page6' className='w-[100%] h-[70vh] flex gap-2 pr-[1.3vw] pl-[1.3vw] mt-[7vw]' initial={{opacity:0}} whileInView={{opacity:1}}>
      <motion.div className='w-[21%] h-[100%] mr-7 leading-[1.7vw]'
     initial={{x:-90,opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.4, delay:0}} 
      >
        <h1 className='font-black'>OUR IMPACT.</h1>
        <p>The thing is, we don't save anyone.</p>
        <p>What we do is provide a safe space for women to change the course of their own lives.</p>
        <p>After many years of living in crisis, abuse and complex trauma, restoring self-worth is foundational for 
        independence. We believe that through experiences that promote love and respect, we can spark and nurture a sense of 
        self-worth for those on the path of healing.</p>
      </motion.div>
      <motion.div className='w-[35%] h-[100%] ml-[5vw]' 
      initial={{y:90,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.4, delay:0}}  whileHover={{scale:0.98}}
      >
          <img className='h-[39vw] w-[35vw]' src="https://cdn.sanity.io/images/w8f1ak3c/production/943f8f43b76b4e030f41deddca1edd44170fee39-5504x8256.jpg/Christina-Maria-Jes-Lindsay-9143.jpg?fp-x=0.5&fp-y=0.5&w=640&h=947&fit=crop&crop=focalpoint&auto=format" alt="" />
      </motion.div>
      <motion.div className='w-[35%]  h-[100%] ml-[1.4vw]'
      initial={{y:90,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.4, delay:0.3}}  whileHover={{scale:0.98}}
      >
      <img  className='h-[39vw] w-[35vw]' src="https://cdn.sanity.io/images/w8f1ak3c/production/84da7b8b510e006ce0ca22769d93bb6c044945f6-5504x8256.jpg/Patricia-Work-Work-Good-Stories-Two-Good-Co.jpg?rect=0,56,5504,8144&w=640&h=947&fit=min&auto=format" alt="" />
      </motion.div>
    </motion.div>
  )
}

export default Page6