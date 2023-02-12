import React from 'react'
import AllProducts from '../components/AllProducts'
import FIlters from '../components/FIlters'

const Shop = () => {
    return (
        <>
            <div className=" w-4/5 mx-auto pt-24 grid md:grid-cols-3 lg:grid-cols-4 gap-2">
                <FIlters />
                <AllProducts />
            </div>
        </>
    )
}

export default Shop
