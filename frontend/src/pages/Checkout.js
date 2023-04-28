import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Checkout = () => {
    const baseUrl = "http://localhost:4000/"

    const [allCarts, setCarts] = useState(null)
    const [subTotal, setSubtotal] = useState(0)


    const navigate = useNavigate()

    const allCartData = async () => {
        setCarts(JSON.parse(localStorage.getItem('cart')))
    }

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            toast.warning('Login First')
            navigate('/404')
        } else {
            allCartData()
        }
    }, [])

    useEffect(() => {
        let subtotal = 0;
        const allCart = JSON.parse(localStorage.getItem('cart'))
        const subtotalResult = allCart.map(cart => {
            let price = Math.floor(cart.price - (cart.price * (cart.disCount / 100)))
            subtotal = subtotal + (cart.cartQuantity * price)
        })
        setSubtotal(subtotal)
    }, [allCarts])


    const negativeQty = (cid) => {

        let data = JSON.parse(localStorage.getItem('cart'))
        let newCart = data.map(cart => {
            if (cart.cartQuantity > 0 && cart.id == cid) {
                return { ...cart, cartQuantity: cart.cartQuantity - 1 }
            } else {
                return cart
            }
        })
        setCarts(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))

    }



    const positiveQty = (cid) => {
        let data = JSON.parse(localStorage.getItem('cart'))
        let newCart = data.map(cart => {
            if (cart.cartQuantity > 0 && cart.id == cid) {
                return { ...cart, cartQuantity: cart.cartQuantity + 1 }
            } else {
                return cart
            }
        })

        setCarts(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    console.log(allCarts);


    return (
        <>
            <div className="w-3/4 mx-auto pt-24 mb-[100px]">
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12">
                    <div className=" col-span-3  md:col-span-3 lg:col-span-2 imageBar flex flex-wrap md:block justify-start md:justify-between items-end">

                        {

                            allCarts !== null ? allCarts.map(product => {

                                return (
                                    <div className="block md:flex justify-between items-center mx-auto text-center md:text-left my-8" key={"jjj" + product.title}>
                                    <img src="https://i.pinimg.com/564x/b3/65/22/b36522d445db79472de4478c22b0ff20.jpg" className="md:w-28 md:h-28" alt="" />
                                        <div className="block md:w-[500px] mx-2">
                                            <p className='text-2xl font-bold my-2'>{product.title}</p>
                                            <p className='text-md font-semibold my-2'>${Math.floor(product.price - (product.price * (product.disCount / 100)))}</p>
                                    </div>
                                        <div className="flex justify-center items-center p-[20px] bg-slate-400 h-[40px]">
                                            {product.cartQuantity < 2 ? <span className='text-2xl font-bold mx-2 cursor-not-allowed disabled text-red-500' disabled={true} >-</span> : <span className='text-2xl font-bold mx-2 cursor-pointer' onClick={() => { negativeQty(product.id) }} >-</span>}
                                            <p className='w-[50px] bg-gray-200 text-center'>{product.cartQuantity
                                            }</p>
                                            <span className='text-2xl font-bold mx-2 cursor-pointer' onClick={() => { positiveQty(product.id) }}>+</span>
                                    </div>
                                        <p className='text-md font-semibold my-2 mx-2'>${Math.floor(product.price - (product.price * (product.disCount / 100))) * product.cartQuantity}</p>
                                </div>)
                            }) : 'No cart'
                        }

                    </div>
                    <div className="singleImageBar col-span-3 lg:col-span-1  p-2 bg-gray-100">
                        <p className='text-2xl font-bold'>CART TOTAL</p>
                        <div className="flex justify-between my-2">
                            <p className='text-2xl font-light'>Subtotal</p>
                            <p className='text-2xl font-light'>$ {subTotal}</p>
                        </div>
                        <div className="flex justify-between my-2">
                            <p className='text-lg font-light'>Additional Charges: </p>
                            <p className='text-lg font-light'>Delivery fee $30</p>
                        </div>
                        <div className="flex justify-between my-2">
                            <p className='text-2xl font-light'>Total</p>
                            <p className='text-2xl font-light'>$ {subTotal + 30}</p>
                        </div>
                        <div className="text-center">
                            <p className='bg-black py-2 mt-10 text-md text-white font-light'>PROCEED TO CHECKOUT</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout
