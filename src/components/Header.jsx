import React from 'react'
import logo from './img/logo.png'

const Header = () => {
    return (
        <div className='fixed w-screen z-50 p-6 px-16'>
            {/* desktop and tab  */}
            <div className='hidden md:flex w-full  h-full'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="logo" className='w-10 object-contain' />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </div>
            </div>

            {/* for mobile */}
            <div className='flex md:hidden w-full  h-full'></div>
        </div>
    )
}

export default Header