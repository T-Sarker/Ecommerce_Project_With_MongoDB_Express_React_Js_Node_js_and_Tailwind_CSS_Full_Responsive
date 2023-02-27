
import React, { useEffect, useState } from 'react'
import { FaStar, FaRegImages, FaHeart, FaCartPlus, FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { toast } from "react-toastify"
import { NavLink } from 'react-router-dom';
import WishlistHelper from './WishlistHelper';
import { addToCart } from '../features/cart/Cart';
const AllProducts = (props) => {
    const imgUrl = "http://localhost:4000/"
    // const dispatch = useDispatch()
    const { products } = useSelector((state) => (state.products))
    const { filteredProduct } = useSelector((state) => (state.shop))
    const dispatch = useDispatch()

    const [modal, setModal] = useState({ type: false, dta: '' })
    const { category, brand, price } = props.filters
    const [allProducts, setAllProducts] = useState([])
    const [sort, setSort] = useState("newest")
    const [starsavg, setStarsavg] = useState()

    const getFilterProduct = async () => {

        const dtaUrl = imgUrl + `api/product/filter/${category !== undefined ? category : 'no'}/` + `${brand !== undefined ? brand : 'no'}/` + `${price !== undefined ? price : 'no'}`

        const filteredProduct = await axios.get(dtaUrl, err => { console.log(err) })

        setAllProducts(filteredProduct.data.filterProduct)
    }
    useEffect(() => {
        if (category === undefined && brand === undefined && price === undefined) {

            setAllProducts(products ? products.products : null)
        } else {
            getFilterProduct()
        }
    }, [category, brand, price, products, filteredProduct])

    const resetFilter = () => {
        setAllProducts(products ? products.products : null)
    }

    useEffect(() => {
        if (sort === "newest" && allProducts.length > 0) {
            console.log(allProducts);
            const datas = [...allProducts].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
            setAllProducts(datas);
        } else if (sort === "asc" && allProducts.length > 0) {
            console.log(allProducts);
            console.log(typeof (allProducts));
            const datas = [...allProducts].sort((a, b) => (b.price - a.price))
            setAllProducts(datas);
        } else if (sort === "desc" && allProducts.length > 0) {
            console.log(allProducts);
            const datas = [...allProducts].sort((a, b) => a.price - b.price)
            setAllProducts(datas);
        }
    }, [sort])

    const wishListHandle = async (pId) => {

        WishlistHelper(imgUrl, pId)

    }

    const handleCartData = (id, title, image, price, discount) => {
        if (!localStorage.getItem('user')) {
            toast.error('Login First')
        } else {
            const cartProduct = {
                id,
                title,
                image,
                price,
                disCount: discount,
            }
            dispatch(addToCart(cartProduct))
        }
    }

    return (
        <>


            <div className="shopWraper md:col-span-2 lg:col-span-3 px-6 border-2 border-gray-200">
                {modal.dta === '' ? '' : <div className={`w-full md:w-1/2 fixed top-[25%] md:top-0 z-10 left-0 bottom-0 right-0 m-auto ${modal ? 'block' : 'hidden'}`}>
                    <div className="top-4 flex items-center justify-center">
                        <p className='absolute top-0 right-0' onClick={() => { setModal(false) }}>{modal.dta !== '' ? <FaWindowClose className='text-red-500 text-2xl' /> : ""}</p>
                        <img src={`${modal.dta}`} className="max-w-full" alt="" />
                    </div>
                </div>}
                <div className={`filter2OptionWraper flex ${category !== undefined || brand !== undefined || price !== undefined ? 'justify-between' : 'justify-end'}`}>
                    {
                        category !== undefined || brand !== undefined || price !== undefined ? <p className='bg-gray-300 shadow-md px-4 py-2 uppercase cursor-pointer' onClick={resetFilter}>reset</p> : ''
                    }

                    <div className="max-w-[200px] filter2 flex">
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[6px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setSort(e.target.value)}>

                            <option value="newest" defaultValue>Newest</option>
                            <option value="asc">Price Hight to low</option>
                            <option value="desc">Price Low to High</option>
                        </select>
                    </div>
                </div>
                <div className="productWraper">
                    <div className="productItems  grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-4">
                        {
                            allProducts !== null && allProducts.length > 0 ? allProducts.map(product => {

                                // console.log(reviewSum);
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

                                                        <li className='w-10 h-10 bg-white text-center cursor-pointer text-black font-bold mb-5 p-2' onClick={() => { handleCartData(product._id, product.title, product.images[0], product.price, product.discount) }}><FaCartPlus className='inline-block align-middle' /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="categoryText px-3">
                                            <p className='text-black font-semibold my-1 text-lg capitalize h-[55px]'><NavLink to={`/product/${product.slug}`}>{product.title}</NavLink></p>

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

                                                            if (i <= avgStar) {
                                                                stars.push(
                                                                    <FaStar className='text-yellow-300' key={'dd' + i} />
                                                                )
                                                            } else {
                                                                stars.push(
                                                                    <FaStar className='text-gray-300' key={'dd' + i} />
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
                                                    <p className=' my-1 font-black text-green-500'>${Math.floor(product.price - (product.price * (product.discount / 100)))}</p>
                                                    <del className='my-1 font-black text-green-300 ml-6'>${product.price}</del>
                                                </div>
                                                <p className="bg-purple-400 px-4 flex justify-center items-center" onClick={() => { handleCartData(product._id, product.title, product.images[0], product.price, product.discount) }}><FaCartPlus /></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : 'No product'
                        }



                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProducts
