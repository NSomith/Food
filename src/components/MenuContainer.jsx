import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { IoFastFood } from 'react-icons/io5'
import { categories } from '../utils/data'
import { motion } from 'framer-motion'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'

const MenuContainer = () => {

    const [filter, setfilter] = useState("chicken")

    const [{ foodItems }, dispatch] = useStateValue()

    

    return (
        <section className='w-full my-6' id='menu'>
            <div className='flex flex-col items-center justify-center w-full'>
                <p className='text-lg font-semibold capitalize mr-auto'>
                    Our Dishes
                </p>
                <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll
                scrollbar-none
                '>

                    {categories && categories.map((catogary) => (
                        <motion.div key={catogary.id}
                            whileTap={{ scale: 0.7 }}
                            onClick={() => setfilter(catogary.urlParamName)}
                            className='group bg-white w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg 
                        flex flex-col gap-3 hover:bg-red-500 items-center justify-center '>
                            <div className='w-10 h-10 rounded-full bg-red-500 group-hover:bg-white flex items-center justify-center'>
                                <IoFastFood className='text-card group-hover:text-textColor text-lg ' />
                            </div>
                            <p className='text-sm text-textColor group-hover:text-card'>{catogary.name}</p>
                        </motion.div>
                    ))}

                </div>

                <div className='w-full'>
                    <RowContainer flag={false} data={foodItems.filter(n=> n.category == filter)}/>
                </div>
            </div>

        </section>
    )
}

export default MenuContainer