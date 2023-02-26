import React from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
const WishlistHelper = async (baseUrl, pId) => {
    if (!localStorage.getItem('user')) {
        return toast.error('Login First')
    } else {
        const wishlist = await axios.get(`${baseUrl}api/product/wishlist/${pId}`, {
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
            }
        })
        if (wishlist.data.type === 'success') {
            return toast.success(wishlist.data.msg)
        }
        if (wishlist.data.type === 'error') {
            return toast.warning(wishlist.data.msg)
        }
    }
}

export default WishlistHelper

