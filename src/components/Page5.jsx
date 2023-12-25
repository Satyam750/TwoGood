import { motion } from 'framer-motion'
import React from 'react'


const Page5 = () => {
    return (
        <motion.div id='page5' className='mt-[5vw] flex justify-center flex-col' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.02, delay:0.6}}>
          <div className='ml-[10vw]'>
          <h1 className='uppercase text-7xl w-[80vw] font-extrabold ml-[6vw]'>THANK YOU SO MUCH FOR THE
                BEAUTIFUL CATERING; IT MEANS 
                  <h1 className='ml-[5vw]'>A LOT WORKING WITH A</h1>
                COMPANY SUCH AS TWO GOOD
                <h1 className='flex justify-center mr-[9vw]'>CO.</h1></h1>
          </div>
                <motion.button     whileHover={{scale:1.1, background:"gray", color:"black"}}
                   transition={{ type: "spring", stiffness: 400, damping: 10 }} >Send Your own message</motion.button>
                <span>Sometimes it’s the smallest actions <br /> that can make the biggest impact.</span>
        </motion.div>
    )
}

export default Page5