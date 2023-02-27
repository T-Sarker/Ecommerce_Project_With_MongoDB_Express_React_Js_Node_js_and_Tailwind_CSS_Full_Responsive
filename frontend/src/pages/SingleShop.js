import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import CartHelper from '../components/CartHelper';
import { addToCart } from '../features/cart/Cart';


const SingleShop = () => {
    const { user } = useSelector((state) => (state.auth))
    const dispatch = useDispatch()
    const baseUrl = 'http://localhost:4000/'
    const navigate = useNavigate()
    const [imgBar, setImgBar] = useState('')
    const [Sproduct, setSingleProduct] = useState(null);
    const [tabNo, setTabNo] = useState(1)
    let { slug } = useParams();
    const [review, setReview] = useState({ comment: '', stars: null })
    const [click, setclick] = useState(false)
    const [cartData, setCartData] = useState(0)

    const getProductData = async () => {
        const product = await axios.get(baseUrl + 'api/product/single/' + slug)

        if (product.data.type === 'error') {
            navigate('/404')
        }
        setSingleProduct(product.data.result)
    }

    useEffect(() => {
        console.log('here');
        if (slug !== undefined) {
            getProductData()
        }
    }, [slug, click])


    const reviewData = (e) => {
        setReview((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    /**
     * 
     * @param {product id} pId
    this is to insert the review data to corespond the product  
     */
    const handleRivewData = async (pId) => {
        console.log(review);

        try {

            if (review.comment !== '' && review.stars !== null) {
                let reviewData = {
                    comment: review.comment,
                    stars: review.stars,
                    pId: pId
                }
                const data = await axios.post(baseUrl + 'api/product/review/add/', reviewData, {
                    headers: {
                        "Authorization": "Bearer " + JSON.parse(localStorage.getItem('user')).token
                    }
                })
                console.log(data);
                console.log(Sproduct.reviews.every(rv => {
                    return rv - user === user.id
                }));
                if (data) {
                    setclick(!click)
                    return toast.success('Review Added')
                }
            } else {
                toast.error('Fields can\'t be empty')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleCart = () => {
        const cartProduct = {
            id: Sproduct._id,
            title: Sproduct.title,
            image: Sproduct.images[0],
            price: Sproduct.price,
            disCount: Sproduct.discount,
        }

        dispatch(addToCart(cartProduct))
    }

    return (
        <>
            {
                Sproduct !== null ?

                    (<div className="w-3/4 mx-auto pt-24">
                        <div className="imageArea">
                            <div className="grid sm:grid-cols-1 md:grid-cols-3">
                                <div className=" col-span-1 imageBar flex flex-wrap md:block justify-start md:justify-between items-end">

                                    {
                                        Sproduct.images.map((img, index) => {
                                            let imgurl = baseUrl + 'public/uploads/' + img
                                            return (
                                                index !== 0 ?
                                                    <img className='w-[30%] m-1 mx-auto' key={'k' + index} onClick={() => { setImgBar(imgurl) }} src={imgurl} alt="" /> : '')
                                        })
                                    }

                                </div>
                                <div className="singleImageBar cols-span-1 md:col-span-2 h-[500px]">
                                    <img className='w-[500px] h-[500px]' src={imgBar !== '' ? imgBar : baseUrl + 'public/uploads/' + Sproduct.images[1]} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="contentArea text-center mt-8">
                            <h2 className='text-2xl font-black my-6'>{Sproduct.title}</h2>

                            <div className="flex w-full justify-center my-4">
                                <div className='flex my-1'>
                                    {(() => {

                                        let stars = [];
                                        let reviewSum = 0


                                        if (Sproduct.reviews.length > 0) {
                                            Sproduct.reviews.map(rvw => {
                                                reviewSum = reviewSum + rvw.star
                                            })
                                        }

                                        if (reviewSum > 0) {
                                            let avgStar = Math.floor(reviewSum / Sproduct.reviews.length)
                                            for (let i = 1; i <= 5; i++) {
                                                console.log();
                                                if (i <= avgStar) {
                                                    stars.push(
                                                        <FaStar className='text-yellow-300' key={'ddd' + i} />
                                                    )
                                                } else {
                                                    stars.push(
                                                        <FaStar className='text-gray-300' key={'ddd' + i} />
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
                                - {Sproduct.reviews.length > 0 ? Sproduct.reviews.length : 0} Reviews</div>
                            <p className='text-2xl font-semibold my-4'>${Sproduct.price - (Sproduct.price * (Sproduct.discount / 100))} <del className="text-lg">${Sproduct.price}</del></p>
                            <p className='bg-purple-400 inline my-4  text-white font-black text-lg uppercase px-3 hover:bg-purple-600 cursor-pointer' onClick={handleCart}>Add to cart</p>
                            <p>{Sproduct.details.substring(0, 300)}...</p>
                        </div>



                        <div className="tabsWrapper my-16">
                            <ul className='w-[50%] flex justify-around mx-auto text-center'>
                                <li className='px-3 py-2 border-r-2 hover:text-pink-500 hover:font-black' onClick={() => { setTabNo(1) }}>Description</li>
                                <li className='px-3 py-2 border-r-2 hover:text-pink-500 hover:font-black' onClick={() => { setTabNo(2) }}>Customer reviews({Sproduct.reviews.length})</li>
                                <li className='px-3 py-2 hover:text-pink-500 hover:font-black' onClick={() => { setTabNo(3) }}>Additional information</li>
                            </ul>
                            <div className="tabContents">

                                <div className={`tabCOntent  ease-in-out duration-500 ${tabNo === 1 ? 'block' : 'hidden'}`}>
                                    <p className='text-gray-400 my-8'>Category: <span className='bg-green-300 text-black px-4 shadow-md mx-4 font-semibold'>{Sproduct.category.name}</span></p>
                                    <p className='text-gray-400 my-8'>Brand: <span className='bg-green-300 text-black px-4 shadow-md mx-4 font-semibold'>{Sproduct.brand.name}</span></p>
                                    {Sproduct.details}
                                </div>
                                <div className={`tabCOntent py-2 ease-in-out duration-500 ${tabNo === 2 ? 'block' : 'hidden'}`}>
                                    {
                                        !user ? '' : <div className="riviewForm w-full mx-4 mt-8 md:flex items-center">
                                            <p className='text-lg font-bold'>Write a Review: </p>
                                            <input type="text" name='comment' onChange={reviewData} className='p-2 border-2 w-full my-2 md:w-4/12 mr-4' />
                                            <div className="filter2  md:w-4/12">
                                                <select id="stars" name='stars' onChange={reviewData} className='p-2 border-2 w-full my-2 mr-4' >
                                                    <option value={null}>Select Star</option>
                                                    <option value={5}>5 Star</option>
                                                    <option value={4}>4 Star</option>
                                                    <option value={3}>3 Star</option>
                                                    <option value={2}>2 Star</option>
                                                    <option value={1}>1 Star</option>
                                                </select>
                                            </div>
                                            <button type='button' onClick={() => { handleRivewData(Sproduct._id) }} className='bg-green-300 text-black fond-bold text-center p-2 w-full my-2 w-[100px]'>Send</button>
                                        </div>
                                    }
                                    {
                                        Sproduct.reviews.length > 0 ? Sproduct.reviews.map(rvw => {
                                            return (<div className="reviewItem bg-white shadow-md p-4 my-6 relative">
                                                <div className="flex rounded-lg justify-start items-center">
                                                    <img className='w-8 h-8 ' src={baseUrl + 'public/uploads/' + rvw.user.image} alt="" />
                                                    <div className="reviews ml-4 mt-4">
                                                        <p className='text-lg font-semibold'>{rvw.user.name}</p>
                                                        <p>{rvw.comment}</p>
                                                    </div>
                                                </div>
                                                <p className='flex absolute top-0 right-0 m-2'>
                                                    {(() => {
                                                        let stars = [];
                                                        for (let i = 1; i <= 5; i++) {
                                                            if (i <= rvw.star) {
                                                                stars.push(
                                                                    <FaStar className='text-yellow-300' />
                                                                )
                                                            } else {
                                                                stars.push(
                                                                    <FaStar className='text-black-300' />
                                                                )
                                                            }


                                                        }
                                                        return stars;
                                                    })()}
                                                </p>

                                            </div>)
                                        }) : 'No review yet'
                                    }


                                </div>
                                <div className={`tabCOntent  ease-in-out duration-500 ${tabNo === 3 ? 'block' : 'hidden'}`}>
                                    3Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste, at enim modi repudiandae nulla, officia voluptatibus recusandae molestias neque tenetur repellat aut pariatur soluta sapiente officiis et cupiditate hic.
                                </div>
                            </div>
                        </div>
                    </div>) : 'Loading'
            }
        </>
    )
}

export default SingleShop
