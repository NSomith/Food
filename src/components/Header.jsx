import React from 'react'
import logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import { MdShoppingBasket } from "react-icons/md";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {

    const firebaseauth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const [{ user }, dispatch] = useStateValue()
    console.log(`this is ${JSON.stringify(user)}`);
    // const lo = useStateValue()


    // console.log(lo);
    // console.log(`userurl ${user.photoURL}`);

    const login = async () => {
        const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseauth, provider)
        console.log(providerData[0]);

        dispatch({
            type: actionType.SER_USER,
            user: providerData[0]
        })

        localStorage.setItem('user',JSON.stringify(providerData[0]))
    }
    return (
        <header className='fixed w-screen z-50 p-6 px-16'>
            {/* desktop and tab  */}
            <div className=' hidden md:flex w-full  h-full items-center justify-between'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={logo} alt="logo" className='w-10 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>

                <div className='flex items-center '>
                    <ul className='flex items-center  gap-8'>
                        <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer'>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer'>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer'>About Us</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer'>Service</li>
                    </ul>

                    <div className='relative flex items-center justify-center'>
                        <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                        <div className='absolute -top-2 left-10 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs text-white font-semibold'>2</p>
                        </div>
                    </div>

                    <motion.img
                        // referrerPolicy="no-referrer"
                        whileTap={{ scale: 0.6 }}
                        src={user? user.photoURL : Avatar}
                        className='w-10 ml-3 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                        alt="avatarimage"
                        onClick={login}
                    />
                </div>
            </div>

            {/* for mobile */}
            <div className='flex md:hidden w-full  h-full  '></div>
        </header>
    )
}

export default Header