import React from 'react'
import DateCounter from './DateCounter'

const FlashDeal = () => {
    return (
        <>
            <div className="bg-gray-300 p-8">
                <div className="w-4/5 mx-auto p-2">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2">
                        <div className="image flex">

                            <div class="w-[80px] h-[80px] bg-blue-500 text-white absolute text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ">
                                <p className='font-black text-[11px] mt-4 uppercase p-1 '>sale off -$22.30</p>
                            </div>
                            <img src="https://preview.colorlib.com/theme/malefashion/img/product-sale.png.webp" alt="" />
                        </div>
                        <div className="flashText sm:mt-5">
                            <p className='text-pink-500  sm:text-purple-500 font-medium md:text-red-500 my-2'>DEAL OF THE WEEK</p>
                            <p className='text-2xl font-semibold my-2'>Multi-pocket Chest Bag Black</p>
                            <DateCounter />
                            <p className='px-3 py-2 bg-black text-white w-36 text-center mt-8 rounded-sm'>Shop Now</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashDeal
