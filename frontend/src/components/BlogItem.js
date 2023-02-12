import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
const BlogItem = () => {
    return (
        <>
            <div className="blogItem items-center shadow-md p-2 mb-4 grid">
                <div className="p-2 shadow-sm mb-1 relative items-center">
                    <img src="https://static01.nyt.com/images/2019/09/19/fashion/20PRADAREVIEW-Alberta-Ferretti/merlin_161026332_7fae3eb5-b217-455b-a784-5d5b822e032f-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="" />
                </div>
                <div className="blogText w-[300px] mx-auto bg-slate-200 mt-[-30px] p-6 z-10">
                    <p className="text-gray-500 flex items-center"> <FaCalendarAlt className='mr-3' /> 9 Feb 2023</p>
                    <p className='text-black font-semibold my-2'>Clothing product title here for the bottom blog</p>
                    <p className='mt-2  text-black font-black hover:underline hover:underline-offset-4 decoration-pink-500'>Read More</p>
                </div>
            </div>
        </>
    )
}

export default BlogItem
