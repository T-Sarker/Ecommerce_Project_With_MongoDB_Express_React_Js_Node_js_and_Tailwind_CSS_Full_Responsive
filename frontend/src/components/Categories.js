import React from 'react'
import { useSelector } from 'react-redux'

const Categories = () => {
    const imgUrl = "http://localhost:4000/"
    const { isPLoading, category } = useSelector((state) => (state.products))
    return (
        <>
            <div className="categoriesWraper w-4/5 mx-auto items-center my-10">
                <div className="categoryItems  grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-4">
                    {
                        category ? category.map(cat => {
                            const followedAt = new Date(cat.updatedAt);
                            return (
                                <div className="categoryItem flex items-center shadow-md p-1" key={cat._id}>
                                    <div className="categoryText">
                                        <p className='text-2xl text-black '>{cat.name}</p>
                                        <p>Collection {followedAt.getFullYear()}</p>
                                        <p className='px-3 py-1 mt-2 bg-black text-white w-28 rounded-sm'>Shop Now</p>
                                    </div>
                                    <div className="p-2">
                                        <img src={`${imgUrl}public/uploads/category/${cat.image}`} alt="" />
                                    </div>
                                </div>
                            )
                        }) : 'No category'
                    }



                </div>
            </div>
        </>
    )
}

export default Categories
