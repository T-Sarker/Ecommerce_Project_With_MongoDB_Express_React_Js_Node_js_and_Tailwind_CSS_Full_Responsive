/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cartItems: [],
    totalItem: 0,
    totalAmount: 0,

}


const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingIndex >= 0) {
                state.cartItems[existingIndex].cartQuantity += 1
                state.totalAmount = state.totalAmount + (action.payload.price - (action.payload.price * (action.payload.disCount / 100)))
            } else {
                state.cartItems.push({ ...action.payload, cartQuantity: 1 })
                state.totalItem += 1
                state.totalAmount = Math.floor(state.totalAmount + (action.payload.price - (action.payload.price * (action.payload.disCount / 100))))
            }
        }
    },
})

export const { addToCart } = CartSlice.actions
export default CartSlice.reducer