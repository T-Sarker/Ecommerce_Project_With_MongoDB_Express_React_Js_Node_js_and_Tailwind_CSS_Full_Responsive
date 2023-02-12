import React from 'react'
import ReactDOM from 'react-dom';
import Carousel from "react-elastic-carousel";
import { FaCalendarAlt } from "react-icons/fa";
import BlogItem from './BlogItem';
const Blogs = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 }
    ];
    return (
        <>
            <div className="text-center mt-8">
                <p className='text-2xl font-black'>Latest Trends</p>
            </div>
            <div className="blogWraper">
                <Carousel breakPoints={breakPoints}>
                    <div className="blogItem items-center shadow-md p-2 m-2 grid">
                        <div className="p-2 shadow-sm mb-1 relative items-center">
                            <img src="https://static01.nyt.com/images/2019/09/19/fashion/20PRADAREVIEW-Alberta-Ferretti/merlin_161026332_7fae3eb5-b217-455b-a784-5d5b822e032f-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="" />
                        </div>
                        <div className="blogText w-4/5 mx-auto bg-slate-200 mt-[-30px] p-6 z-10">
                            <p className="text-gray-500 flex items-center"> <FaCalendarAlt className='mr-3' /> 9 Feb 2023</p>
                            <p className='text-black font-semibold my-2'>Clothing product title here for the bottom blog</p>
                            <p className='mt-2  text-black font-black hover:underline hover:underline-offset-4 decoration-pink-500'>Read More</p>
                        </div>
                    </div>

                    <div className="blogItem items-center shadow-md p-2 m-2 grid">
                        <div className="p-2 shadow-sm mb-1 relative items-center">
                            <img src="https://images.hellomagazine.com/imagenes/hfm/20221017154410/2023-fashion-trends-to-have-on-your-radar/0-751-99/fringing-trend-z.jpg" alt="" />
                        </div>
                        <div className="blogText w-4/5 mx-auto bg-slate-200 mt-[-30px] p-6 z-10">
                            <p className="text-gray-500 flex items-center"> <FaCalendarAlt className='mr-3' /> 9 Feb 2023</p>
                            <p className='text-black font-semibold my-2'>Clothing product title here for the bottom blog</p>
                            <p className='mt-2  text-black font-black hover:underline hover:underline-offset-4 decoration-pink-500'>Read More</p>
                        </div>
                    </div>

                    <div className="blogItem items-center shadow-md p-2 m-2 grid">
                        <div className="p-2 shadow-sm mb-1 relative items-center">
                            <img src="https://assets.teenvogue.com/photos/55839943fb1995762be3befc/master/pass/fashion-fall-trends-2012-09-streetstyle-th.jpg" alt="" />
                        </div>
                        <div className="blogText w-4/5 mx-auto bg-slate-200 mt-[-30px] p-6 z-10">
                            <p className="text-gray-500 flex items-center"> <FaCalendarAlt className='mr-3' /> 9 Feb 2023</p>
                            <p className='text-black font-semibold my-2'>Clothing product title here for the bottom blog</p>
                            <p className='mt-2  text-black font-black hover:underline hover:underline-offset-4 decoration-pink-500'>Read More</p>
                        </div>
                    </div>

                    <div className="blogItem items-center shadow-md p-2 m-2 grid">
                        <div className="p-2 shadow-sm mb-1 relative items-center">
                            <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2022/06/fashion-photography-tips-3.jpg?w=600&h=1260&ssl=1" alt="" />
                        </div>
                        <div className="blogText w-4/5 mx-auto bg-slate-200 mt-[-30px] p-6 z-10">
                            <p className="text-gray-500 flex items-center"> <FaCalendarAlt className='mr-3' /> 9 Feb 2023</p>
                            <p className='text-black font-semibold my-2'>Clothing product title here for the bottom blog</p>
                            <p className='mt-2  text-black font-black hover:underline hover:underline-offset-4 decoration-pink-500'>Read More</p>
                        </div>
                    </div>

                    <div className="blogItem items-center shadow-md p-2 m-2 grid">
                        <div className="p-2 shadow-sm mb-1 relative items-center">
                            <img src="https://t2.uc.ltmcdn.com/en/posts/1/3/4/the_return_of_the_y2k_fashion_13431_600.jpg" alt="" />
                        </div>
                        <div className="blogText w-4/5 mx-auto bg-slate-200 mt-[-30px] p-6 z-10">
                            <p className="text-gray-500 flex items-center"> <FaCalendarAlt className='mr-3' /> 9 Feb 2023</p>
                            <p className='text-black font-semibold my-2'>Clothing product title here for the bottom blog</p>
                            <p className='mt-2  text-black font-black hover:underline hover:underline-offset-4 decoration-pink-500'>Read More</p>
                        </div>
                    </div>

                    <div className="blogItem items-center shadow-md p-2 m-2 grid">
                        <div className="p-2 shadow-sm mb-1 relative items-center">
                            <img src="https://apparelnews.media.clients.ellingtoncms.com/img/photos/2022/05/20/MIAFW_t600.jpg?4326734cdb8e39baa3579048ef63ad7b451e7676" alt="" />
                        </div>
                        <div className="blogText w-4/5 mx-auto bg-slate-200 mt-[-30px] p-6 z-10">
                            <p className="text-gray-500 flex items-center"> <FaCalendarAlt className='mr-3' /> 9 Feb 2023</p>
                            <p className='text-black font-semibold my-2'>Clothing product title here for the bottom blog</p>
                            <p className='mt-2  text-black font-black hover:underline hover:underline-offset-4 decoration-pink-500'>Read More</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Blogs
