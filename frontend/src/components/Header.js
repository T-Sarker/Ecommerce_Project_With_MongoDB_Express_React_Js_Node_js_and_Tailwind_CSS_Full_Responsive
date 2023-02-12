import React, { useState } from 'react'
import { FaHeart, FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const menuClick = () => {
        setShowMenu(!showMenu)
    }
    console.log(showMenu);
    return (
        <>
            <div className="headerWrapper w-full p-4 bg-slate-300 shadow-lg flex justify-between  h-20 items-center md:fixed md:z-10">
                <p className="text-3xl font-black leading-none self-end">Fashion Up <span className='text-6xl text-red-500'>.</span></p>

                <div className="menuItems hidden md:block text-xs md:text-lg">
                    <ul className='flex justify-between items-center'>
                        <li className='mx-3 hover:underline hover:underline-offset-4 decoration-pink-500'><NavLink to="">Home</NavLink></li>
                        <li className='mx-3 hover:underline hover:underline-offset-4 decoration-pink-500'><NavLink to="/shop">Shop</NavLink></li>
                        <li className='mx-3 hover:underline hover:underline-offset-4 decoration-pink-500'><NavLink to="/blog">Blog</NavLink></li>
                        <li className='mx-3 hover:underline hover:underline-offset-4 decoration-pink-500'><NavLink to="">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="iconMenu">
                    <ul className='flex justify-between items-center hidden md:flex'>
                        <li className='mx-3'><FaSearch className='font-light' /></li>
                        <li className='mx-3'><FaHeart className='font-light' /></li>
                        <li className='mx-3 '><NavLink className='flex items-center' to='/checkout'><FaShoppingCart className='mr-2 font-light' /> $0.00</NavLink></li>
                    </ul>
                </div>
                {
                    !showMenu ? <FaBars className='md:hidden text-2xl' onClick={menuClick} /> : <FaTimes className='md:hidden text-2xl' onClick={menuClick} />
                }


            </div>
            <div className={`mobileMenu bg-black text-white fixed w-52 h-screen top-0 ease-in-out duration-500 ${showMenu == false ? 'left-[-300px]' : 'left-[0px]'}`}>
                <div className="py-3">
                    <p className="text-2xl pl-2 font-black leading-none self-end">Fashion Up <span className='text-3xl text-red-500'>.</span></p>
                    <div className="flex items-center px-1 mt-3">
                        <input type="text" className='w-[80%] p-1 h-7' /><FaSearch className='font-light text-lg p-1 ml-1 rounded-sm bg-teal-400 h-7' />
                    </div>
                    <ul className="block px-2 divide-y divide-gray-50">
                        <li className='py-2 mb-2 hover:text-pink-500'><NavLink to="/">Home</NavLink></li>
                        <li className='py-2 mb-2 hover:text-pink-500'><NavLink to="/shop">Shop</NavLink></li>
                        <li className='py-2 mb-2 hover:text-pink-500'><NavLink to="/blog">Blog</NavLink></li>
                        <li className='py-2 mb-2 hover:text-pink-500'><NavLink to="">Contact</NavLink></li>
                        <li className='py-2 mb-2 hover:text-pink-500'><FaHeart className='font-light' /></li>
                        <li className='py-2 mb-2 hover:text-pink-500 flex items-center'><FaShoppingCart className='mr-2 font-light' /> $0.00</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
