import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { FaStar, FaRegImages, FaHeart, FaCartPlus, FaWindowClose } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import WishlistHelper from './WishlistHelper';

const Products = () => {
    const imgUrl = "http://localhost:4000/"
    const { products } = useSelector((state) => (state.products))
    const [tabNo, setTabNo] = useState(1)
    const [modal, setModal] = useState({ type: false, dta: '' })
    const wishListHandle = async (pId) => {

        WishlistHelper(imgUrl, pId)

    }
    return (
        <>
            <div className={`relative z-10 w-1/2  justify-center items-center mx-auto ${modal ? 'block' : 'hidden'}`}>
                <div className="w-4/5 fixed top-4  ">
                    <p className='text-right ' onClick={() => { setModal(false) }}>{modal.dta !== '' ? <FaWindowClose className='text-red-500 text-2xl' /> : ""}</p>
                    <img src={`${modal.dta}`} alt="" />
                </div>
            </div>
            <div className="text-center">
                <p className='text-2xl font-black'>Products</p>
            </div>
            <div className="tabsWrapper my-8">
                <ul className='w-[50%] flex justify-between mx-auto'>
                    <li className='px-3 py-2 border-r-2 hover:text-pink-500 hover:font-black cursor-pointer' onClick={() => { setTabNo(1) }}>New Arraival</li>
                    <li className='px-3 py-2 border-r-2 hover:text-pink-500 hover:font-black cursor-pointer' onClick={() => { setTabNo(2) }}>Best Selling</li>
                    <li className='px-3 py-2 border-r-2 hover:text-pink-500 hover:font-black cursor-pointer' onClick={() => { setTabNo(3) }}>Trendy</li>
                </ul>
                <div className="tabContents">
                    <div className={`tabCOntent  ease-in-out duration-500 ${tabNo == 1 ? 'block' : 'hidden'}`}>
                        <div className="productWraper w-4/5 mx-auto items-center my-10">
                            <div className="productItems  grid md:grid-cols-2 lg:grid-cols-4 md:gap-3 lg:gap-4">
                                {console.log(products)}
                                {
                                    products !== null ? products.products.length > 0 ? products.products.map(product => {
                                        return (
                                            <div className="productItem items-center shadow-md p-1 mb-4" key={product._id}>
                                                <div className="p-2 shadow-sm mb-1 relative">
                                                    <span className="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{product.discount}%</span>
                                                    <div className="imageOptions flex">
                                                        <img src={`${imgUrl}public/uploads/${product.images[1]}`} alt="" />
                                                        <div className="hoverOption">
                                                            <ul className="my-3 w-[40px]">

                                                                <li className='w-10 h-10 bg-white text-center cursor-pointer text-black font-bold mb-5 p-2' onClick={() => { wishListHandle(product._id) }}><FaHeart className='inline-block align-middle' /></li>

                                                                <li className='w-10 h-10 bg-white text-center cursor-pointer text-black font-bold mb-5 p-2' onClick={() => { setModal({ type: !modal, dta: `${imgUrl}public/uploads/${product.images[1]}` }) }}><FaRegImages className='inline-block align-middle' /></li>

                                                                <li className='w-10 h-10 bg-white text-center cursor-pointer text-black font-bold mb-5 p-2'><FaCartPlus className='inline-block align-middle' /></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="categoryText px-3">
                                                    <p className='text-black font-semibold my-1 text-lg capitalize h-[55px] overflow-y-hidden'><NavLink to={`/product/${product.slug}`}>{product.title}</NavLink></p>
                                                    <div className='flex my-1'>
                                                        {(() => {

                                                            let stars = [];
                                                            let reviewSum = 0


                                                            if (product.reviews.length > 0) {
                                                                product.reviews.map(rvw => {
                                                                    reviewSum = reviewSum + rvw.star
                                                                })
                                                            }

                                                            if (reviewSum > 0) {
                                                                let avgStar = Math.floor(reviewSum / product.reviews.length)
                                                                for (let i = 1; i <= 5; i++) {
                                                                    console.log();
                                                                    if (i <= avgStar) {
                                                                        stars.push(
                                                                            <FaStar className='text-yellow-300' key={'dddff' + i} />
                                                                        )
                                                                    } else {
                                                                        stars.push(
                                                                            <FaStar className='text-gray-300' key={'dddff' + i} />
                                                                        )
                                                                    }


                                                                }
                                                            } else {
                                                                return <p className='flex my-1'>
                                                                    <FaStar className='text-gray-300' />
                                                                    <FaStar className='text-gray-300' />
                                                                    <FaStar className='text-gray-300' />
                                                                    <FaStar className='text-gray-300' />
                                                                    <FaStar className='text-gray-300' />
                                                                </p>
                                                            }

                                                            return stars
                                                        })()}
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <div className="flex">
                                                            <p className=' my-1 font-black text-green-500'>${product.price - (product.price * (product.discount / 100))}</p>
                                                            <del className='my-1 font-black text-green-300 ml-6'>${product.price}</del>
                                                        </div>
                                                        <p className="bg-purple-400 px-4 flex justify-center items-center"><FaCartPlus /></p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }) : <p className='text-center text-2xl font-black'>No Product</p> : ''
                                }




                            </div>
                        </div>
                    </div>
                    <div className={`tabCOntent  ease-in-out duration-500 ${tabNo == 2 ? 'block' : 'hidden'}`}>
                        <div className="productWraper w-4/5 mx-auto items-center my-10">
                            <div className="productItems  grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-4">

                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>2Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={`tabCOntent  ease-in-out duration-500 ${tabNo == 3 ? 'block' : 'hidden'}`}>
                        <div className="productWraper w-4/5 mx-auto items-center my-10">
                            <div className="productItems  grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-4">

                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>3Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>
                                <div className="productItem items-center shadow-md p-1 mb-4">
                                    <div className="p-2 shadow-sm mb-1 relative">
                                        <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                        <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    </div>
                                    <div className="categoryText">
                                        <p className='text-black my-1 '>Clothing product title here</p>
                                        <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                        <p className=' my-1'>$100.00</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
