import React from 'react'
import { FaThLarge, FaSearch, FaList, FaDollarSign, FaTape } from "react-icons/fa";
const FIlters = () => {
    return (
        <>
            <div className="sidebar md:col-span-1">
                <div className="search flex justify-center items-center p-2 border border-indigo-600">
                    <input type="text" className='!outline-none' placeholder='search' />
                    <button><FaSearch className='text-gray-400 mr-2' /></button>
                </div>
                <div className="category my-4">

                    <h3 className='font-bold py-3 uppercase border-b-2 flex justify-between items-center'>Category <span><FaThLarge /></span></h3>
                    <ul className='block'>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>Category (10)</li>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>Category (20)</li>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>Category (30)</li>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>Category (40)</li>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>Category (50)</li>
                    </ul>
                </div>

                <div className="brand my-4">

                    <h3 className='font-bold py-3 uppercase border-b-2 flex justify-between items-center'>Branding <span><FaList /></span></h3>
                    <ul className='block'>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>Brand name</li>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>Brand name</li>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>Brand name</li>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>Brand name</li>
                    </ul>
                </div>

                <div className="prize my-4">

                    <h3 className='font-bold py-3 uppercase border-b-2 flex justify-between items-center'>Prize <span><FaDollarSign /></span></h3>
                    <ul className='block'>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>$0.00 - $50.00</li>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>$50.00 - $100.00</li>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>$100.00 - $150.00</li>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>$150.00 - $200.00</li>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>$200.00 - $250.00</li>
                        <li className='my-2 p-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>250.00+</li>
                    </ul>
                </div>

                <div className="size my-4">

                    <h3 className='font-bold py-3 uppercase border-b-2 flex justify-between items-center'>Size Filter <span><FaTape /></span></h3>
                    <ul className='flex md:justify-between items-center'>
                        <li className='my-2 p-2 border border-indigo-600 mx-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>XS</li>
                        <li className='my-2 p-2 border border-indigo-600 mx-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>S</li>
                        <li className='my-2 p-2 border border-indigo-600 mx-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>M</li>
                        <li className='my-2 p-2 border border-indigo-600 mx-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>XL</li>
                        <li className='my-2 p-2 border border-indigo-600 mx-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>XXL</li>
                    </ul>
                </div>

            </div>
        </>
    )




}

export default FIlters
