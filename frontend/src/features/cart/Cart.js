/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit'

let Tamount = 0
let amount = localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).map(item => { Tamount += (item.price - (item.price * (item.disCount / 100))) })

const initialState = {
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    totalItem: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0,
    totalAmount: Tamount,

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

            localStorage.setItem('cart', JSON.stringify(state.cartItems))
        }
    },
})

export const { addToCart } = CartSlice.actions
export default CartSlice.reducer