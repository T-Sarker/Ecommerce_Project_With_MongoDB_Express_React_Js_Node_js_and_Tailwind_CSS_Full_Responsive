import React, { useState } from 'react'
import AllProducts from '../components/AllProducts'
import { FaThLarge, FaSearch, FaList, FaDollarSign, FaTape } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Shop = () => {
    const { products, category, brands } = useSelector((state) => (state.products))
    const [filters, setFilters] = useState({})

    // console.log(filters);
    return (
        <>
            <div className=" w-4/5 mx-auto pt-24 grid md:grid-cols-3 lg:grid-cols-4 gap-2 justify-between">
                <div className="sidebar md:col-span-1 shadow-sm">
                    <div className="search flex justify-center items-center p-2 border border-indigo-600">
                        <input type="text" className='!outline-none' placeholder='search' />
                        <button><FaSearch className='text-gray-400 mr-2' /></button>
                    </div>
                    <div className="category my-4 border-l-2">

                        <h3 className='font-bold py-3 uppercase border-b-2 flex justify-between items-center flex-wrap'>Category <span><FaThLarge /></span></h3>
                        <ul className='block p-4'>
                            {
                                category ? category.map(cat => {
                                    return (
                                        <li className='my-2 p-3 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer flex items-center'>
                                            <label htmlFor={cat.name} >{cat.name}</label>
                                            <input className='ml-4 hidden' onClick={(e) => { setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value })) }} id={cat.name} type="radio" name="category" value={`${cat._id}`} />
                                        </li>
                                    )
                                }) : 'No category'
                            }



                        </ul>
                    </div>

                    <div className="brand my-4 border-l-2">

                        <h3 className='font-bold py-3 uppercase border-b-2 flex justify-between items-center flex-wrap'>Branding <span><FaList /></span></h3>
                        <ul className='block p-4'>
                            {
                                brands ? brands.map(brand => {
                                    return (
                                        <li className='my-2 p-3 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer flex items-center'>
                                            <label htmlFor={"id" + brand._id} >{brand.name}</label>
                                            <input className='ml-4 hidden' onClick={(e) => { setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value })) }} id={"id" + brand._id} type="radio" name="brand" value={`${brand._id}`} />
                                        </li>
                                    )
                                }) : 'No brands'
                            }
                        </ul>
                    </div>

                    <div className="prize my-4 border-l-2">

                        <h3 className='font-bold py-3 uppercase border-b-2 flex justify-between items-center flex-wrap'>Prize <span><FaDollarSign /></span></h3>
                        <ul className='block p-4'>

                            <li className='my-2 p-3 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>
                                <label htmlFor="p1" >$0.00 - $50.00</label>
                                <input type='radio' className='hidden' onClick={(e) => { setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value })) }} name='price' id='p1' value='50 ' />
                            </li>

                            <li className='my-2 p-3 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>
                                <label htmlFor="p2" >$0.00 - $100.00</label>
                                <input type='radio' className='hidden' onClick={(e) => { setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value })) }} name='price' id='p2' value='100' />
                            </li>

                            <li className='my-2 p-3 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>
                                <label htmlFor="p3" >$0.00 - $150.00</label>
                                <input type='radio' className='hidden' onClick={(e) => { setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value })) }} name='price' id='p3' value='150' />
                            </li>

                            <li className='my-2 p-3 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>
                                <label htmlFor="p4" >$0.00 - $200.00</label>
                                <input type='radio' className='hidden' onClick={(e) => { setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value })) }} name='price' id='p4' value='200' />
                            </li>

                            <li className='my-2 p-3 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>
                                <label htmlFor="p5" >$0.00 - $250.00</label>
                                <input type='radio' className='hidden' onClick={(e) => { setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value })) }} name='price' id='p5' value='250' />
                            </li>
                        </ul>
                    </div>

                    <div className="size my-4 border-l-2">

                        <h3 className='font-bold py-3 uppercase border-b-2 flex justify-between items-center flex-wrap'>Size Filter <span><FaTape /></span></h3>
                        <ul className='flex md:justify-between items-center flex-wrap'>
                            <li className='my-2 p-2 border border-indigo-600 mx-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>XS</li>
                            <li className='my-2 p-2 border border-indigo-600 mx-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>S</li>
                            <li className='my-2 p-2 border border-indigo-600 mx-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>M</li>
                            <li className='my-2 p-2 border border-indigo-600 mx-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>XL</li>
                            <li className='my-2 p-2 border border-indigo-600 mx-2 text-gray-500 hover:text-pink-500 hover:font-semibold cursor-pointer'>XXL</li>
                        </ul>
                    </div>

                </div>
                <AllProducts filters={filters} />
            </div>
        </>
    )
}

export default Shop
