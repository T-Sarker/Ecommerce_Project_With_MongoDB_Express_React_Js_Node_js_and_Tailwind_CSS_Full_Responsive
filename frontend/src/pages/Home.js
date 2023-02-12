import React from 'react'
import { NavLink } from 'react-router-dom'
import Blogs from '../components/Blogs'
import Categories from '../components/Categories'
import FlashDeal from '../components/FlashDeal'
import Products from '../components/Products'

const Home = () => {
    return (
        <>

            <div className="w-full h-screen bg-cover bg-no-repeat bg-right md:bg-opacity-25 md:bg-[url(https://preview.colorlib.com/theme/divisima/img/bg-2.jpg.webp)] bg-black">
                <div className="h-screen mx-auto absolute pl-12 top-[35%]">
                    <div className="top-[50%] text-white">
                        <p className='text-red-500'>Lorem ipsum dolor sit amet</p>
                        <h2 className='text-2xl text-white mt-5 text-whitemd:text-4xl md:mb-2'>Fall- winter Collection</h2>
                        <h2 className='text-2xl text-white md:text-4xl md:mb-4'>Have a blast</h2>
                        <p className='w-[70%] text-white text-sm md:text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nam sapiente aperiam, assumenda obcaecati debitis!</p>
                        <p className='px-5 py-3 bg-white text-black rounded-md bg-whiteuppercase w-52 text-center mt-4 '><NavLink to="">Shop Now</NavLink></p>
                    </div>
                </div>
            </div>
            <Categories />

            <Products />

            <FlashDeal />

            <Blogs />
        </>
    )
}

export default Home
