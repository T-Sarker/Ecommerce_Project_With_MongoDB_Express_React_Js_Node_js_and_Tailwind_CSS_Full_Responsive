import React, { useEffect, useState } from 'react'
import { FaHeart, FaSearch, FaShoppingCart, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { LogoutUser } from '../features/auth/AuthSlice';
import { getAllBrands, getAllCategory, getAllProducts } from '../features/product/productSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { isLoading, user, isError } = useSelector((state) => (state.auth))
    const { isPLoading } = useSelector((state) => (state.products))
    const { cartItems, totalItem, totalAmount } = useSelector((state) => (state.cart))

    const [showMenu, setShowMenu] = useState(false)

    const [CartItemCount, setCartItemCount] = useState(0)

    const menuClick = () => {
        setShowMenu(!showMenu)
    }
    const handleLogout = () => {
        dispatch(LogoutUser())
        window.location.reload();
    }
    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getAllCategory())
        dispatch(getAllBrands())
    }, [isPLoading, isLoading, user])


    useEffect(() => {
        setCartItemCount(totalItem)
    }, [cartItems, totalItem, totalAmount])


    const wishPageHandle = () => {
        if (!localStorage.getItem('user')) {
            toast.error('Login First')
        } else {
            navigate('/wishlist')
        }
    }

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
                        {/* <li className='mx-3'><FaSearch className='font-light' /></li> */}
                        <li className='mx-3 cursor-pointer' onClick={wishPageHandle}><FaHeart className='font-light' /></li>
                        <li className='mx-3 '><NavLink className='flex items-center' to='/checkout'><FaShoppingCart className='mr-2 font-light flex relative' />
                            <span className='itemCounter bg-blue-400 text-sm font-bold text-white'>{CartItemCount}</span>
                            <span className='text-blue-400 font-bold'> ${totalAmount !== 0 ? totalAmount : '0.00'}</span>
                        </NavLink></li>
                        {
                            !user ? <li className='mx-3 '><NavLink className="flex justify-center items-center" to="/login"><FaUser className='font-light mr-1' />Login</NavLink></li> : <li onClick={handleLogout} className='mx-3 flex justify-center items-center cursor-pointer'><FaUser className='font-light mr-1' />Logout</li>
                        }
                    </ul>
                </div>
                {
                    !showMenu ? <FaBars className='md:hidden text-2xl' onClick={menuClick} /> : <FaTimes className='md:hidden text-2xl' onClick={menuClick} />
                }


            </div>
            <div className={`mobileMen bg-black text-white fixed w-52 h-screen top-0 ease-in-out z-50 duration-500 ${showMenu == false ? 'left-[-300px]' : 'left-[0px]'}`}>
                <div className="py-3">
                    <p className="text-2xl pl-2 font-black leading-none self-end">Fashion Up <span className='text-3xl text-red-500'>.</span></p>
                    {/* <div className="flex items-center px-1 mt-3">
                        <input type="text" className='w-[80%] p-1 h-7' /><FaSearch className='font-light text-lg p-1 ml-1 rounded-sm bg-teal-400 h-7' />
                    </div> */}
                    <ul className="block px-2 divide-y divide-gray-50">
                        <li className='py-2 mb-2 hover:text-pink-500'><NavLink to="/">Home</NavLink></li>
                        <li className='py-2 mb-2 hover:text-pink-500'><NavLink to="/shop">Shop</NavLink></li>
                        <li className='py-2 mb-2 hover:text-pink-500'><NavLink to="/blog">Blog</NavLink></li>
                        <li className='py-2 mb-2 hover:text-pink-500'><NavLink to="">Contact</NavLink></li>
                        <li className='py-2 mb-2 hover:text-pink-500'><FaHeart className='font-light' /></li>
                        <li className='py-2 mb-2 hover:text-pink-500 flex items-center'><FaShoppingCart className='mr-2 font-light' /> ${totalAmount !== 0 ? totalAmount : 0.00}</li>

                        {
                            !user ? <li className='py-2 mb-2 hover:text-pink-500'><NavLink className="flex items-center" to="/login"><FaUser className='me-1 font-light' /> Login</NavLink></li> : <li onClick={handleLogout} className='py-2 mb-2 hover:text-pink-500 flex items-center'><FaUser className='me-1 font-light cursor-pointer' /> Logout</li>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
