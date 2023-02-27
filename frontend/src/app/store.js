import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/AuthSlice'
import productReducer from '../features/product/productSlice'
import filterProductReducer from '../features/shop/shopSlice'
import cartReducer from '../features/cart/Cart'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        shop: filterProductReducer,
        cart: cartReducer
    }
}) 