import React from 'react'
import Delvery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { icecreamimg } from '../utils/data'

function HomeContainer() {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full' id='home'>
            <div className='py-2 flex-1 flex flex-col items-center md:items-start justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center p-2 rounded-full bg-orange-100'>
                    <p className='text-base text-orange-300 font-semibold'>Bike Delivery</p>
                    <div className='w-6 h-6 rounded-full overflow-hidden bg-white drop-shadow-lg'>
                        <img src={Delvery} alt="Delivery" className='w-full h-full object-contain' />
                    </div>
                </div>
                <p className='text-[2.5rem] md:text-[4rem] font-bold tracking-wide text-headingColor'>Hie <span className='text-orange-500'>Go</span></p>
                <p className='text-base text-textColor text-center md:text-left w-[80%] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque modi beatae magnam et eos ab ut illum illo, doloribus assumenda, rerum molestias excepturi earum voluptate laudantium harum animi aliquid perferendis.</p>

                <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-400 w-full px-4 py-4 md:w-auto rounded-lg hover:shadow-lg'>Order Now</button>
            </div>
            <div className=' flex-1 h-487 flex items-center relative'>
                <img src={HeroBg} alt="dsf" className='h-370 w-full lg:w-auto ml-auto lg:h-487' />

                <div className='w-full h-full absolute  flex items-center justify-center gap-2 flex-wrap '>
                    {
                        icecreamimg.map((n) => (
                            <div key={n.id} className='w-190  bg-cardOverlay backdrop-blur-md flex items-center justify-center flex-col mt-10'>
                                <img src={n.imgsrc} alt="I1.png" className='w-40 -mt-20' />
                                <p className='text-base font-semibold text-textColor'>{n.name}</p>
                                <p><span className='text-red-500'>$</span>{n.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default HomeContainer