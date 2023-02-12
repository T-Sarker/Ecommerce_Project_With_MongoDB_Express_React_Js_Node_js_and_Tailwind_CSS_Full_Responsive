import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
const SingleShop = () => {
    const [imgBar, setImgBar] = useState('https://i.pinimg.com/564x/b3/65/22/b36522d445db79472de4478c22b0ff20.jpg')
    const [tabNo, setTabNo] = useState(1)
    return (
        <>
            <div className="w-3/4 mx-auto pt-24">
                <div className="imageArea">
                    <div className="grid sm:grid-cols-1 md:grid-cols-3">
                        <div className=" col-span-1 imageBar flex flex-wrap md:block justify-start md:justify-between items-end">
                            <img className='w-[30%] m-1' onClick={() => { setImgBar("https://i.pinimg.com/564x/b3/65/22/b36522d445db79472de4478c22b0ff20.jpg") }} src="https://i.pinimg.com/564x/b3/65/22/b36522d445db79472de4478c22b0ff20.jpg" alt="" />
                            <img className='w-[30%] m-1' onClick={() => { setImgBar("https://saito.edu.my/wp-content/uploads/2017/08/fd_icon.jpg") }} src="https://saito.edu.my/wp-content/uploads/2017/08/fd_icon.jpg" alt="" />
                            <img className='w-[30%] m-1' onClick={() => { setImgBar("https://i.pinimg.com/474x/ff/75/f5/ff75f587cddd0cb6f08aaa7b39439941.jpg") }} src="https://i.pinimg.com/474x/ff/75/f5/ff75f587cddd0cb6f08aaa7b39439941.jpg" alt="" />
                            <img className='w-[30%] m-1' onClick={() => { setImgBar("https://elle.com.sg/wp-content/uploads/2021/09/BLACKPINK-In-Your-Area-All-4-Members-At-Paris-Fashion-Week-mobile.jpg") }} src="https://elle.com.sg/wp-content/uploads/2021/09/BLACKPINK-In-Your-Area-All-4-Members-At-Paris-Fashion-Week-mobile.jpg" alt="" />
                        </div>
                        <div className="singleImageBar cols-span-1 md:col-span-2 ">
                            <img src={`${imgBar}`} alt="" />
                        </div>
                    </div>
                </div>
                <div className="contentArea text-center mt-8">
                    <h2 className='text-2xl font-black my-6'>Hooded thermal anorak</h2>
                    <div className="flex w-full justify-center my-4"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />- 5 Reviews</div>
                    <p className='text-2xl font-semibold my-4'>$270.00 <del className="text-lg">70.00</del></p>
                    <p>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.</p>
                </div>



                <div className="tabsWrapper my-16">
                    <ul className='w-[50%] flex justify-around mx-auto text-center'>
                        <li className='px-3 py-2 border-r-2 hover:text-pink-500 hover:font-black' onClick={() => { setTabNo(1) }}>Description</li>
                        <li className='px-3 py-2 border-r-2 hover:text-pink-500 hover:font-black' onClick={() => { setTabNo(2) }}>Customer reviews(5)</li>
                        <li className='px-3 py-2 hover:text-pink-500 hover:font-black' onClick={() => { setTabNo(3) }}>Additional information</li>
                    </ul>
                    <div className="tabContents">
                        <div className={`tabCOntent  ease-in-out duration-500 ${tabNo == 1 ? 'block' : 'hidden'}`}>
                            <p className='my-4'>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.</p>
                            <p className='my-4'>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.</p>
                            <p className='my-4'>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.</p>
                        </div>
                        <div className={`tabCOntent py-2 ease-in-out duration-500 ${tabNo == 2 ? 'block' : 'hidden'}`}>
                            <div className="reviewItem bg-white shadow-md p-4 my-6 relative">
                                <div className="flex rounded-lg justify-start items-center">
                                    <img className='w-8 h-8 ' src="https://www.shareicon.net/data/256x256/2015/11/11/670511_man_512x512.png" alt="" />
                                    <div className="reviews ml-4">
                                        <p className='text-lg font-semibold'>Tapos Kumar Sarker</p>
                                        <p>side tabs and a front zip fastening with placket</p>
                                    </div>
                                </div>

                                <p className='flex absolute top-0 right-0 m-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            </div>

                            <div className="reviewItem bg-white shadow-md p-4 my-6 relative">
                                <div className="flex rounded-lg justify-start items-center">
                                    <img className='w-8 h-8 ' src="https://www.shareicon.net/data/256x256/2015/11/11/670511_man_512x512.png" alt="" />
                                    <div className="reviews ml-4">
                                        <p>Tapos Kumar Sarker</p>
                                        <p>side tabs and a front zip fastening with placket</p>
                                    </div>
                                </div>

                                <p className='flex absolute top-0 right-0 m-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            </div>

                            <div className="reviewItem bg-white shadow-md p-4 my-6 relative">
                                <div className="flex rounded-lg justify-start items-center">
                                    <img className='w-8 h-8 ' src="https://www.shareicon.net/data/256x256/2015/11/11/670511_man_512x512.png" alt="" />
                                    <div className="reviews ml-4">
                                        <p>Tapos Kumar Sarker</p>
                                        <p>side tabs and a front zip fastening with placket</p>
                                    </div>
                                </div>

                                <p className='flex absolute top-0 right-0 m-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            </div>

                            <div className="reviewItem bg-white shadow-md p-4 my-6 relative">
                                <div className="flex rounded-lg justify-start items-center">
                                    <img className='w-8 h-8 ' src="https://www.shareicon.net/data/256x256/2015/11/11/670511_man_512x512.png" alt="" />
                                    <div className="reviews ml-4">
                                        <p>Tapos Kumar Sarker</p>
                                        <p>side tabs and a front zip fastening with placket</p>
                                    </div>
                                </div>

                                <p className='flex absolute top-0 right-0 m-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            </div>

                            <div className="reviewItem bg-white shadow-md p-4 my-6 relative">
                                <div className="flex rounded-lg justify-start items-center">
                                    <img className='w-8 h-8 ' src="https://www.shareicon.net/data/256x256/2015/11/11/670511_man_512x512.png" alt="" />
                                    <div className="reviews ml-4">
                                        <p>Tapos Kumar Sarker</p>
                                        <p>side tabs and a front zip fastening with placket</p>
                                    </div>
                                </div>

                                <p className='flex absolute top-0 right-0 m-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            </div>

                            <div className="reviewItem bg-white shadow-md p-4 my-6 relative">
                                <div className="flex rounded-lg justify-start items-center">
                                    <img className='w-8 h-8 ' src="https://www.shareicon.net/data/256x256/2015/11/11/670511_man_512x512.png" alt="" />
                                    <div className="reviews ml-4">
                                        <p>Tapos Kumar Sarker</p>
                                        <p>side tabs and a front zip fastening with placket</p>
                                    </div>
                                </div>

                                <p className='flex absolute top-0 right-0 m-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            </div>

                        </div>
                        <div className={`tabCOntent  ease-in-out duration-500 ${tabNo == 3 ? 'block' : 'hidden'}`}>
                            3Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste, at enim modi repudiandae nulla, officia voluptatibus recusandae molestias neque tenetur repellat aut pariatur soluta sapiente officiis et cupiditate hic.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleShop
