
import React, { useEffect, useState } from 'react'
import { FaStar, FaRegImages, FaHeart, FaCartPlus, FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { filteredProductlist } from '../features/shop/shopSlice';
import { getAllProducts } from '../features/product/productSlice';
import axios from 'axios';
const AllProducts = (props) => {
    const imgUrl = "http://localhost:4000/"
    const dispatch = useDispatch()
    const { products, isPLoading } = useSelector((state) => (state.products))
    const { filteredProduct, isSLoading, isSSuccess } = useSelector((state) => (state.shop))

    const [modal, setModal] = useState({ type: false, dta: '' })
    const { category, brand, price } = props.filters
    const [allProducts, setAllProducts] = useState({})

    // console.log(category + ' ' + brand + ' ' + price);
    const getFilterProduct = async () => {
        console.log('inside else');
        const dtaUrl = imgUrl + `api/product/filter/${category !== undefined ? category : 'no'}/` + `${brand !== undefined ? brand : 'no'}/` + `${price !== undefined ? price : 'no'}`
        console.log(dtaUrl);
        const filteredProduct = await axios.get(dtaUrl, err => { console.log(err) })
        console.log(filteredProduct.data);
        setAllProducts(filteredProduct.data)
    }
    useEffect(() => {
        if (category === undefined && brand === undefined && price === undefined) {
            console.log('inside');
            setAllProducts(products ? products.products : null)
        } else {
            getFilterProduct()
            // let filterData = { category: category !== undefined ? category : 'no', brand: brand !== undefined ? brand : 'no', price: price !== undefined ? price : 'no', }
            // console.log(filterData);
            // dispatch(filteredProductlist(filterData))
            // setAllProducts({})
            // setAllProducts(filteredProduct ? filteredProduct.products : null)

        }
    }, [category, brand, price,])


    console.log(allProducts);
    return (
        <>
            {modal.dta === '' ? '' : <div className={`relative z-10 w-1/2  justify-center items-center mx-auto ${modal ? 'block' : 'hidden'}`}>
                <div className="w-4/5 fixed top-4  ">
                    <p className='text-right ' onClick={() => { setModal(false) }}>{modal.dta !== '' ? <FaWindowClose className='text-red-500 text-2xl' /> : ""}</p>
                    <img src={`${modal.dta}`} alt="" />
                </div>
            </div>}
            <div className="shopWraper md:col-span-2 lg:col-span-3 px-6 border-2 border-gray-200">
                <div className="filter2OptionWraper flex justify-end">
                    <div className="max-w-[200px] filter2 flex">
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[6px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option value="newest" defaultValue>Newest</option>
                            <option value="asc">Price Hight to low</option>
                            <option value="desc">Price Low to High</option>
                        </select>
                    </div>
                </div>
                <div className="productWraper">
                    <div className="productItems  grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-4">

                        <div className="productItem items-center shadow-md p-1 mb-4">
                            <div className="p-2 shadow-sm mb-1 relative">
                                <span className="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                <div className="imageOptions flex">
                                    <img src="https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg" alt="" />
                                    <div className="hoverOption">
                                        <ul className="my-3 w-[40px]">
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2'><FaHeart className='inline-block align-middle' /></li>
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2' onClick={() => { setModal({ type: !modal, dta: 'https://static-01.daraz.com.bd/p/3376ebc0495e17e3e548e622809ee146.jpg' }) }}><FaRegImages className='inline-block align-middle' /></li>
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2'><FaCartPlus className='inline-block align-middle' /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="categoryText">
                                <p className='text-black my-1 '>1Clothing product title here</p>
                                <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p className=' my-1'>$100.00</p>
                            </div>
                        </div>


                        <div className="productItem items-center shadow-md p-1 mb-4">
                            <div className="p-2 shadow-sm mb-1 relative">
                                <span className="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                <div className="imageOptions flex">
                                    <img src="https://cdn.shopify.com/s/files/1/0154/8596/0292/products/product-image-1138050909_800x.jpg?v=1579573373g" alt="" />
                                    <div className="hoverOption">
                                        <ul className="my-3 w-[40px]">
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2'><FaHeart /></li>
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2' onClick={() => { setModal({ type: !modal, dta: 'https://cdn.shopify.com/s/files/1/0154/8596/0292/products/product-image-1138050909_800x.jpg?v=1579573373' }) }}><FaRegImages /></li>
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2'><FaCartPlus /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="categoryText">
                                <p className='text-black my-1 '>1Clothing product title here</p>
                                <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p className=' my-1'>$100.00</p>
                            </div>
                        </div>

                        <div className="productItem items-center shadow-md p-1 mb-4">
                            <div className="p-2 shadow-sm mb-1 relative">
                                <span className="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                <div className="imageOptions flex">
                                    <img src="https://static-01.daraz.com.bd/p/72119f0fd734b50fbc141d31c969a645.jpg" alt="" />
                                    <div className="hoverOption">
                                        <ul className="my-3 w-[40px]">
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2'><FaHeart /></li>
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2' onClick={() => { setModal({ type: !modal, dta: 'https://static-01.daraz.com.bd/p/72119f0fd734b50fbc141d31c969a645.jpg' }) }}><FaRegImages /></li>
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2'><FaCartPlus /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="categoryText">
                                <p className='text-black my-1 '>1Clothing product title here</p>
                                <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p className=' my-1'>$100.00</p>
                            </div>
                        </div>

                        <div className="productItem items-center shadow-md p-1 mb-4">
                            <div className="p-2 shadow-sm mb-1 relative">
                                <span className="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                <div className="imageOptions flex">
                                    <img src="https://static-01.daraz.com.bd/p/5259780ff7a2e29fea935dd4fbda8133.jpg" alt="" />
                                    <div className="hoverOption">
                                        <ul className="my-3 w-[40px]">
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2'><FaHeart /></li>
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2' onClick={() => { setModal({ type: !modal, dta: 'https://static-01.daraz.com.bd/p/5259780ff7a2e29fea935dd4fbda8133.jpg' }) }}><FaRegImages /></li>
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2'><FaCartPlus /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="categoryText">
                                <p className='text-black my-1 '>1Clothing product title here</p>
                                <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p className=' my-1'>$100.00</p>
                            </div>
                        </div>
                        <div className="productItem items-center shadow-md p-1 mb-4">
                            <div className="p-2 shadow-sm mb-1 relative">
                                <span className="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                <div className="imageOptions flex">
                                    <img src="https://sc04.alicdn.com/kf/Had47ba4f5bf04b83acd9a220b12d793bi.jpg" alt="" />
                                    <div className="hoverOption">
                                        <ul className="my-3 w-[40px]">
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2'><FaHeart /></li>
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2' onClick={() => { setModal({ type: !modal, dta: 'https://sc04.alicdn.com/kf/Had47ba4f5bf04b83acd9a220b12d793bi.jpg' }) }}><FaRegImages /></li>
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2'><FaCartPlus /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="categoryText">
                                <p className='text-black my-1 '>1Clothing product title here</p>
                                <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p className=' my-1'>$100.00</p>
                            </div>
                        </div>
                        <div className="productItem items-center shadow-md p-1 mb-4">
                            <div className="p-2 shadow-sm mb-1 relative">
                                <span className="bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                <div className="imageOptions flex">
                                    <img src="https://cf.shopee.ph/file/2d64fdb7be48a4d7d78fc3d3e9d05ec4" alt="" />
                                    <div className="hoverOption">
                                        <ul className="my-3 w-[40px]">
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2'><FaHeart /></li>
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2' onClick={() => { setModal({ type: !modal, dta: 'https://cf.shopee.ph/file/2d64fdb7be48a4d7d78fc3d3e9d05ec4' }) }}><FaRegImages /></li>
                                            <li className='w-10 h-10 bg-white text-center text-black font-bold mb-5 p-2'><FaCartPlus /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="categoryText">
                                <p className='text-black my-1 '>1Clothing product title here</p>
                                <p className='flex my-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <p className=' my-1'>$100.00</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProducts
