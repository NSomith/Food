import React from 'react'
import HomeContainer from './HomeContainer'
import { motion } from 'framer-motion'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'
import { useState } from 'react'
import { useEffect } from 'react'
import MenuContainer from './MenuContainer'
import CartContainer from './CartContainer'

const MainContainer = () => {

  const [{ foodItems,cartShow}, dispatch] = useStateValue()

  const [scrollValue, setscrollValue] = useState(0)

  useEffect(() => { }, [scrollValue,cartShow])

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />

      <section className='w-full my-6 '>
        <div className='w-full flex justify-between'>
          <p className='text-lg font-semibold capitalize'>
            Our fresh & healthy fruits
          </p>

          <div className=' gap-3 items-center flex '>
            <motion.div whileTap={{ scale: 0.7 }} className='w-8 h-8 rounded-lg bg-orange-600 cursor-pointer 
            hover:bg-orange-400 
            hover:shadow-xl flex items-center justify-center'
              onClick={() => setscrollValue(-200)}
            >
              <MdChevronLeft className='text-lg text-white' />

            </motion.div>
            <motion.div whileTap={{ scale: 0.7 }} className='w-8 h-8 rounded-lg bg-orange-600 cursor-pointer 
            hover:bg-orange-400  
            hover:shadow-xl flex items-center justify-center'
              onClick={() => setscrollValue(200)}>
              <MdChevronRight className='text-lg text-white' />

            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true} data={foodItems?.filter((n) => n.category === 'fruits')} />
      </section>

      {/* <MenuContainer/> */}
      {cartShow && (<CartContainer/> )}
    </div>
  )
}

// md: jab medium se bara hoga toh ye act karega
// grid-col-1 normal flow small se 

export default MainContainer