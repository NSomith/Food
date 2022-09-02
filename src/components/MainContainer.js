import React from 'react'
import HomeContainer from './HomeContainer'
import {motion} from 'framer-motion'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const MainContainer = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer/>

      <section className='w-full my-6 '>
        <div className='w-full flex justify-between'>
          <p className='text-lg font-semibold capitalize'>
            Our fresh & healthy fruits 
          </p>

          <div className=' gap-3 items-center flex '>
            <motion.div whileTap={{scale:0.7}} className='w-8 h-8 rounded-lg bg-orange-600 cursor-pointer 
            hover:bg-orange-400 transition-all duration-100 ease-in-out 
            hover:shadow-xl flex items-center justify-center'>
              <MdChevronLeft className='text-lg text-white'/>
            </motion.div>
            <motion.div whileTap={{scale:0.7}} className='w-8 h-8 rounded-lg bg-orange-600 cursor-pointer 
            hover:bg-orange-400 transition-all duration-100 ease-in-out 
            hover:shadow-xl flex items-center justify-center'>
              <MdChevronRight className='text-lg text-white'/>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

// md: jab medium se bara hoga toh ye act karega
// grid-col-1 normal flow small se 

export default MainContainer