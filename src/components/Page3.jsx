import { motion } from 'framer-motion'
import React, { useState } from 'react'


const Page3 = () => {

    return (
        <div className='h-[17vw] W-[100%] flex justify-between pl-[1.3vw] pr-[1.3vw] mt-[5vw] '>
            <div className=' leading-[4vw]'>
                <h1 className='font-extrabold text-[3.3vw]'> WE BELIEVE IN PEOPLE,</h1>
                <h1 className='font-extrabold text-[3.3vw]'>UNTIL THEY BELIEVE IN THEMSELVES AGAIN.</h1>
            </div>
            <div className='flex flex-col gap-[2vw] font-medium'>
                <p className=''>Everything we do is designed to rebuild self worth and independence, in order to break free from the cycle of disadvantage.</p>
                <p className=''>With every purchase you make with us, you're helping to change the course of someone's life; you're walking alongside vulnerable women as they find their way home again.</p>
                <span  className=' cursor-pointer'>SHOP TO SUPPORT</span>
                <motion.div  whileHover={{x:8,opacity:0}} transition={{duration:0.8}} className='bg-black h-[0.13vw] w-[8.2vw] relative top-[-30px] cursor-pointer' > </motion.div>
            </div>
        </div>
    )
}

export default Page3