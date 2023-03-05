import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import axios from 'axios'


const Wishlist = () => {
    const baseUrl = "http://localhost:4000/"

    const navigate = useNavigate()
    const [wishList, setWishList] = useState(null)

    const allWishListData = async () => {
        const data = await axios.get(baseUrl + 'api/product/wishlist', {
            headers: {
                "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
            }
        })
        setWishList(data.data.wish)

    }

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/404')
        } else {
            allWishListData()
        }
    }, [])
    console.log(wishList);
    return (
        <>
            <div className="w-4/5 mx-auto pt-24">
                <div className="h-[100vh]">
                    <div className=" imageBar flex flex-wrap md:block justify-start md:justify-between items-end">

                        {

                            wishList !== null && wishList.map(product => {

                                return (<div className="block md:flex justify-between items-center mx-auto text-center md:text-left my-8" key={"jjj" + product.product._id}>
                                    <img src={`${baseUrl}public/uploads/${product.product.images[0]}`} className="md:w-28 md:h-28" alt="" />
                                    <div className="block">
                                        <p className='text-2xl font-bold my-2 mx-3'>{product.product.title}</p>
                                        <p className='text-md font-semibold my-2  mx-3'>${product.product.price}</p>
                                    </div>

                                    <p className='text-md font-semibold my-2'>{product.product.reviews.length} Reviews Available</p>
                                    <p className='text-md font-semibold my-2 bg-purple-700 text-white uppercase px-3'><NavLink to={`/product/${product.product.slug}`}>See details</NavLink></p>
                                </div>)
                            })
                        }

                    </div>

                </div>
            </div>

        </>
    )
}

export default Wishlist
