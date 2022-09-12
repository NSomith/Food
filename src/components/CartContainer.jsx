import { motion } from 'framer-motion'
import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'


const CartContainer = () => {
    const [{cartShow}, dispatch] = useStateValue()

    const showcart = ()=>{
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow
        })
    }

    return (
        <motion.div
            initial={{opacity:0,x:200}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:200}}
            
            className='w-full md:w-375 h-screen bg-white drop-shadow-md 
            flex flex-col fixed top-0 right-0 z-[101]'>
            <div className='w-full flex items-center justify-between p-4 cursor-pointer '>
                <motion.div whileTap={{ scale: 0.75 }}>
                    <MdOutlineKeyboardBackspace onClick={showcart} className='text-textColor text-3xl' />
                </motion.div>

                <p className='text-textColor text-lg font-semibold'>Cart</p>

                <motion.p whileTap={{ scale: 0.75 }} className='flex items-center gap-2 cursor-pointer p-1 bg-gray-100 rounded-md'>
                    Clear <RiRefreshFill /></motion.p>
            </div>

            {/* for bottom section */}
            <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
                <div className='w-full h-340 md:h-42 px-6  flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
                    {/* for cart item     */}
                    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
                        <img
                            className='w-20 h-20 max-h-[60px] rounded-full '
                            src='https://firebasestorage.googleapis.com/v0/b/restaurantapp-aa2c4.appspot.com/o/Images%2F1661860245572%20-%20c1.png?alt=media&token=5b7e2105-8f0d-4735-9d6c-643426c32ef5' alt="" />
                        <div className='flex flex-col gap-2'>
                            <p className='text-base text-gray-100'>
                                Curry
                            </p>
                            <p className='text-sm text-gray-100 font-semibold'>$40</p>
                        </div>

                        <div className='group  flex items-center justify-between gap-2 ml-auto  cursor-pointer'>
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <BiMinus className='text-gray-50' />
                            </motion.div>
                            <p className=' h-5 rounded-sm bg-cartBg text-white font-semibold'>
                                1
                            </p>

                            <motion.div whileTap={{ scale: 0.75 }}>
                                <BiPlus className='text-gray-50' />
                            </motion.div>
                        </div>

                    </div>

                    
                    
                </div>
            {/* for cart total */}
                <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly  px-8  py-2'>
                        <div className='w-full flex items-center justify-between'>
                            <p className='text-gray-50 text-lg'>SubTotal</p>
                            <p className='text-gray-50 text-lg'>$40</p>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <p className='text-gray-50 text-lg'>Delivery</p>
                            <p className='text-gray-50 text-lg'>$40</p>
                        </div>
                        <div className='w-ful border-b border-gray-600 my-2'></div>

                        <div className='w-full flex items-center justify-between'>
                            <p className='text-gray-50 text-lg'>Total</p>
                            <p className='text-gray-50 text-lg'>$40</p>
                        </div>
                        <motion.button whileTap={{scale:0.75}} type='button'
                         className='w-full p-2 rounded-full bg-blue-400 my-2'>
                            Check out
                        </motion.button>
                    </div>
            </div>
        </motion.div>
    )
}

export default CartContainer