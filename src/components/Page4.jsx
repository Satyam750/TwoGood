import { motion } from 'framer-motion'
import React from 'react'

const Page4 = () => {
  return (
    <motion.div className='mt-[13vw]' id='page4' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.8,duration:1}}>
        <motion.div className='child cursor-pointer' whileHover={{scale:1.1}} transition={{duration:0.6}}> 
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/adb77436d60e62d2b5b0574016abcc864b8e65b0-4498x2999.png/DSC0078_Dexter%20Kim.png?rect=470,108,3458,2760&fp-x=0.4888698630136987&fp-y=0.49614340367765025&w=1024&h=817&fit=crop&crop=focalpoint&auto=format" alt="" />
         <h3 className=''>Change the course cook kit</h3>
         <p>$95</p>
        </motion.div>
        <motion.div className='child mt-[4vw] cursor-pointer' whileHover={{scale:1.1}} transition={{duration:0.6}}> 
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/4206e9c3f7ab098369c39a2194b82eeca6bb0664-6166x4111.png/DSC0005_Dexter%20Kim.png?rect=2,0,6163,4111&w=1024&h=683&auto=format" alt="" />
        <h3 className=''>the cookbook duo kit</h3>
         <p>$72</p>
        </motion.div>
        <motion.div className='child mt-[15vw] cursor-pointer' whileHover={{scale:1.1}} transition={{duration:0.6}}> 
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d38a94692dcb9250bb49632883f8e31c4a11e123-1408x1408.png/Two%20Hugs%20Candle%20Two%20Good%20Co.png?w=1024&h=1024&auto=format" alt="" />
        <h3>Two Hugs candle</h3>
         <p>$69</p>
        </motion.div>
        <motion.div className='child mt-[15vw] cursor-pointer' whileHover={{scale:1.1}} transition={{duration:0.6}}> 
        <img src="https://cdn.sanity.io/images/w8f1ak3c/production/5ff174456e7f3a000b5bcdd6768155d29570c39b-5000x5000.png/Good-Nights-Sleep-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format" alt="" />
        <h3>The Good Night's Sleep Pack</h3>
         <p>$125</p>
        </motion.div>
    </motion.div>
  )
}

export default Page4