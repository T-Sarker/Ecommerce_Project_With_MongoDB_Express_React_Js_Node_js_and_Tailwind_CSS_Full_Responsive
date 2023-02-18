import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { FaStar, FaRegImages, FaHeart, FaCartPlus, FaWindowClose } from "react-icons/fa";

const Products = () => {
    const imgUrl = "http://localhost:4000/"
    const { products } = useSelector((state) => (state.products))
    const [tabNo, setTabNo] = useState(1)
    const [modal, setModal] = useState({ type: false, dta: '' })
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
                    <li className='px-3 py-2 border-r-2 hover:text-pink-500 hover:font-black' onClick={() => { setTabNo(1) }}>New Arraival</li>
                    <li className='px-3 py-2 border-r-2 hover:text-pink-500 hover:font-black' onClick={() => { setTabNo(2) }}>Best Selling</li>
                    <li className='px-3 py-2 border-r-2 hover:text-pink-500 hover:font-black' onClick={() => { setTabNo(3) }}>Trendy</li>
                </ul>
                <div className="tabContents">
                    <div className={`tabCOntent  ease-in-out duration-500 ${tabNo == 1 ? 'block' : 'hidden'}`}>
                        <div className="productWraper w-4/5 mx-auto items-center my-10">
                            <div className="productItems  grid md:grid-cols-2 lg:grid-cols-4 md:gap-3 lg:gap-4">

                                {
                                    products ? products.products.map(item => {
                                        return (
                                            <div className="productItem items-center shadow-md p-1 mb-4" key={item._id}>
                                                <div className="p-2 shadow-sm mb-1 relative">
                                                    <span class="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                                    <div className="imageOptions flex">
                                                        <img src={`${imgUrl}public/uploads/${item.images[1]}`} alt="" />
                                                        <div className="hoverOption">
                                                            <ul className="my-3 w-[40px]">
                                                                <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2'><FaHeart /></li>
                                                                <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2' onClick={() => { setModal({ type: !modal, dta: 'https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg' }) }}><FaRegImages /></li>
                                                                <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2'><FaCartPlus /></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="categoryText">
                                                    <p className='text-black my-1 '>{item.title}</p>
                                                    <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                                    <p className=' my-1'>${item.price}</p>
                                                </div>
                                            </div>
                                        )
                                    }) : 'no product'
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
