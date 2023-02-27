import React from 'react'
import { toast } from 'react-toastify'
const CartHelper = (pId, quantity = 1) => {
  if (!localStorage.getItem('user')) {

    return toast.error('Login First')

  } else {
    if (localStorage.getItem('cart')) {
      let cartData = JSON.parse(localStorage.getItem('cart'))
      cartData.push({ pId: pId, quantity: quantity })
    } else {
      let cartData = []
      cartData.push({ pId: pId, quantity: quantity })
      localStorage.setItem('cart', JSON.stringify(cartData))
    }
  }
}

export default CartHelper
