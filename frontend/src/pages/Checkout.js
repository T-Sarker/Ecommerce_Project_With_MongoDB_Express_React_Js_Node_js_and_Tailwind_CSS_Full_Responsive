import React, { useEffect, useState } from 'react'

const Checkout = () => {



    const products = [
        { name: "Apple", price: 10, unit: 1 },
        { name: "Banana", price: 20, unit: 1 },
        { name: "Cherry", price: 30, unit: 1 }
    ]
    const [allCarts, setCarts] = useState(products)

    const negativeQty = (name, unit) => {

        let data = []

    }



    const positiveQty = (name, unit) => {

    }




    return (
        <>
            <div className="w-3/4 mx-auto pt-24">
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12">
                    <div className=" col-span-1  md:col-span-2 imageBar flex flex-wrap md:block justify-start md:justify-between items-end">

                        {

                            allCarts.map(product => {

                                return (<div className="block md:flex justify-between items-center mx-auto text-center md:text-left my-8" key={"jjj" + product.name}>
                                    <img src="https://i.pinimg.com/564x/b3/65/22/b36522d445db79472de4478c22b0ff20.jpg" className="md:w-28 md:h-28" alt="" />
                                    <div className="block">
                                        <p className='text-2xl font-bold my-2'>{product.name}</p>
                                        <p className='text-md font-semibold my-2'>${product.price}</p>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <span className='text-2xl font-bold mx-2' onClick={() => { negativeQty(product.name, product.unit) }}>-</span>
                                        <p className='w-[50px] bg-gray-200 text-center'>{product.unit}</p>
                                        <span className='text-2xl font-bold mx-2' onClick={() => { positiveQty(product.name, product.unit) }}>+</span>
                                    </div>
                                    <p className='text-md font-semibold my-2'>$98.49</p>
                                </div>)
                            })
                        }

                    </div>
                    <div className="singleImageBar cols-span-1 p-2 bg-gray-100">
                        <p className='text-2xl font-bold'>CART TOTAL</p>
                        <div className="flex justify-between my-2">
                            <p className='text-2xl font-light'>Subtotal</p>
                            <p className='text-2xl font-light'>$ 169.50</p>
                        </div>
                        <div className="flex justify-between my-2">
                            <p className='text-2xl font-light'>Total</p>
                            <p className='text-2xl font-light'>$ 169.50</p>
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
