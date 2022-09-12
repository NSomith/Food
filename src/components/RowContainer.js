import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRef } from 'react'
import NotFound from '../img/NotFound.svg'

const RowContainer = ({ flag, data, scrollValue }) => {
    // console.log(data);

    const rowContainer = useRef()
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue
    }, [scrollValue])
    return (
        <div
            ref={rowContainer}
            className={`p-1 w-full flex items-center gap-2 my-12 bg-orange-100 scroll-smooth
             ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'}`}>

            { data && data.length>0 ? data.map((item) => (
                // =====================================================================================================
                <div key={item.id} className='w-300 h-[200px] min-w-[300px] md:w-340 md:min-w-[340px] 
                 bg-cardOverlay my-12 rounded-lg flex flex-col items-center justify-between 
                 p-2 hover:drop-shadow-lg backdrop-blur-md'>
                    <div className='w-full flex items-center justify-between'>
                        <motion.div whileHover={{ scale: 1.2 }} className='w-30 h-20 -mt-8 drop-shadow-2xl' >
                            <img  className='w-full h-full object-contain'
                                src={item?.imageUrl} />
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.7 }} className='rounded-full bg-red-500 w-8 h-8 flex items-center justify-center cursor-pointer hover:shadow-md'>
                            <MdShoppingBasket className='text-white' />
                        </motion.div>
                    </div>

                    <div className='w-full flex flex-col items-end justify-end'>
                        <p className='text-textColor 
                        font-semibold text-base md:text-lg'>{item?.title}</p>
                        <p className='text-sm text-gray-500' >{item?.calories} Claories</p>
                        <div className='flex items-center justify-center mt-1 gap-96'>
                            <p className='text-lg text-headingColor  font-semibold'>
                                <span className='text-red-300 text-sm'>$</span>{item?.price}
                            </p>

                        </div>
                    </div>
                </div>
            )) :
                (
                    <div className='w-full flex flex-col items-center justify-center'>
                        <img src={NotFound} alt="" className='h-340' />
                        <p>Items Not Found</p>
                    </div>
                )
            }

        </div>
    )
}

export default RowContainer