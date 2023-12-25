import { motion } from 'framer-motion'
import React from 'react'

const Page2 = () => {
  return (
    <>
<motion.div id='page2' initial={{opacity:0}} whileInView={{opacity:1}}>
         <motion.div initial={{y:90,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.4, delay:0}} id="elem1" class="elem" whileHover={{scale:1.03}}>
                <img data-scroll data-scroll-speed="1"
                    src="https://cdn.sanity.io/images/w8f1ak3c/production/ee1c2e8894a4c47c4f4ce71b8973589f8a5045b2-902x1500.png/Rectangle%203.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
                    alt=""/>
                <motion.div className='bg-green-100 absolute h-[10vh] w-[20vw] flex gap-8 justify-center items-center uppercase font-semibold rounded-full cursor-pointer'
                   whileHover={{scale:1.1}}
                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
                 ><h1>shop</h1><h1>Messina</h1></motion.div>
            </motion.div>

            <motion.div initial={{y:90,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.4, delay:0.1}} id="elem2" class="elem" whileHover={{scale:1.03}}>
                <img data-scroll data-scroll-speed="1"
                    src="https://cdn.sanity.io/images/w8f1ak3c/production/bb84b7106e978c37f5aa92c8d5781751b2e9d9f2-900x1500.png/Rectangle%202.png?w=640&h=1067&auto=format"
                    alt=""/>
                <motion.div
                 whileHover={{scale:1.1}}
                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
                 className='bg-gray-200 absolute h-[10vh] w-[20vw] flex gap-8 justify-center items-center uppercase font-semibold rounded-full cursor-pointer' ><h1>shop</h1><h1>gifts for good</h1></motion.div>

            </motion.div>
            <motion.div initial={{y:90,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.4,delay:0.2}} id="elem3" class="elem" whileHover={{scale:1.03}}>
                <img data-scroll data-scroll-speed="1"
                    src="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
                    alt=""/>
                    
                    <motion.div 
                     whileHover={{scale:1.1}}
                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className='bg-purple-50 absolute h-[10vh] w-[20vw] flex gap-8 justify-center items-center uppercase font-semibold rounded-full cursor-pointer' ><h1>shop</h1><h1>Bath</h1></motion.div>
              
            </motion.div>
    </motion.div>
    
    </>
  )
}

export default Page2