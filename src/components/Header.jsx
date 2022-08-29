import React from 'react'
import logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { useState } from 'react';

const Header = () => {

    const firebaseauth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const [{ user }, dispatch] = useStateValue()

    const [isMenu, setisMenu] = useState(false)

    console.log(`this is ${JSON.stringify(user)}`);
    const lo = useStateValue()


    console.log(lo);
    // console.log(`userurl ${user.photoURL}`);

    const login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseauth, provider)
            console.log(providerData[0]);

            dispatch({
                type: actionType.SER_USER,
                user: providerData[0]
            })

            /*
            users spelling should be same as action.users
            return {
                    ...state,
                    user: action.users
                };
            */

            localStorage.setItem('user', JSON.stringify(providerData[0]))
        } else {
            setisMenu(!isMenu)
        }
    }

    const logout = () => {
        setisMenu(false)
        localStorage.clear()
        dispatch({
            type: actionType.SER_USER,
            user: null
        })
    }

    return (
        <header className='fixed w-screen z-50 p-3 px-9 md:p-6 md:px-16 bg-primary'>
            {/* desktop and tab  */}
            <div className=' hidden md:flex w-full  h-full items-center justify-between'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={logo} alt="logo" className='w-10 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>

                <div className='flex items-center '>
                    <motion.ul initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 200 }} className='flex items-center  gap-8'>
                        <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer' onClick={()=>setisMenu(false)}>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer' onClick={()=>setisMenu(false)}>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer' onClick={()=>setisMenu(false)}>About Us</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer' onClick={()=>setisMenu(false)}>Service</li>
                    </motion.ul>

                    <div className='relative flex items-center justify-center'>
                        <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                        <div className='absolute -top-2 left-10 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>2</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <motion.img
                            referrerPolicy="no-referrer"
                            whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avatar}
                            className='w-10 ml-3 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                            alt="avatarimage"
                            onClick={login}
                        />

                        {
                            isMenu && (
                                <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className='w-40 bg-gray-50 shadow-xl absolute rounded-lg flex flex-col px-4 py-2 top-12 right-0'  >
                                    {user && user.email === "ningombamsomith@gmail.com" && (
                                        <Link to={'/createitem'}>
                                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer 
                                                 hover:bg-slate-100 transition-all duration-100 ease-in-out'onClick={()=>setisMenu(false)} >New Item <MdAdd /></p>
                                        </Link>
                                    )}
                                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer 
                                            hover:bg-slate-100 transition-all duration-100 ease-in-out' onClick={logout}>Log Out <MdLogout /></p>
                                </motion.div>
                            )
                        }
                    </div>

                </div>
            </div>

            {/* for mobile */}
            <div className='flex justify-between md:hidden w-full  h-full  '>


                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                    <div className='absolute top-2 left-10 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>

                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={logo} alt="logo" className='w-10 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>

                <div className='relative'>
                    <motion.img
                        referrerPolicy="no-referrer"
                        whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : Avatar}
                        className='w-10 ml-3 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                        alt="avatarimage"
                        onClick={login}
                    />

                    {
                        isMenu && (
                            <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className='w-40 bg-gray-50 shadow-xl absolute rounded-lg flex flex-col px-4 py-2 top-12 right-0'  >
                                {user && user.email === "ningombamsomith@gmail.com" && (
                                    <Link to={'/createitem'}>
                                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer 
                                                 hover:bg-slate-100 transition-all duration-100 ease-in-out' onClick={()=>setisMenu(false)}>New Item <MdAdd /></p>
                                    </Link>
                                )}
                                <ul className='flex flex-col  '>
                                    <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2' onClick={()=>setisMenu(false)}>Home</li>
                                    <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2' onClick={()=>setisMenu(false)}>Menu</li>
                                    <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2' onClick={()=>setisMenu(false)}>About Us</li>
                                    <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2' onClick={()=>setisMenu(false)}>Service</li>
                                </ul>
                                <p className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-100 gap-3 cursor-pointer 
                                            hover:bg-slate-300 transition-all duration-100 ease-in-out' onClick={logout}>Log Out <MdLogout /></p>
                            </motion.div>
                        )
                    }

                </div>
            </div>
        </header>
    )
}

export default Header