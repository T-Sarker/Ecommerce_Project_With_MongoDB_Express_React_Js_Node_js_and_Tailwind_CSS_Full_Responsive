import React from 'react'
import { toast } from 'react-toastify'
const CartHelper = (pId) => {
  if (!localStorage.getItem('user')) {
    return toast.error('Login First')
  } else {
    console.log(pId);
  }
}

export default CartHelper
