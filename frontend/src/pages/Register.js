import React, { useEffect, useState } from 'react'
import { FaLock } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { RegisterUser } from '../features/auth/AuthSlice'
import { toast } from 'react-toastify';
const Register = () => {
    const dispatch = useDispatch()
    const { isLoading, user, isSuccess, isError, msg } = useSelector((state) => (state.auth))

    const [registerDatas, setRegisterData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        password: ''

    })

    const [images, setImages] = useState('')

    const handleDataChange = (e) => {
        setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()

        const registerData = new FormData()
        registerData.append('name', registerDatas.name)
        registerData.append('email', registerDatas.email)
        registerData.append('phone', registerDatas.phone)
        registerData.append('address', registerDatas.address)
        registerData.append('password', registerDatas.password)
        registerData.append('image', images)
        dispatch(RegisterUser(registerData))
        setRegisterData({
            name: '',
            email: '',
            phone: '',
            address: '',
            password: ''

        })
        setImages('')
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Successfully Registered")
        }
        if (isError) {
            toast.error(msg)
        }
    }, [isLoading, isError, user])

    return (
        <>
            <div className="w-4/5  pt-24 h-screen  justify-center items-center mx-auto text-center">
                <h2 className='text-3xl font-bold'>Register Now</h2>
                {isSuccess ? <h4><NavLink className="text-blue-500 text-md mt-2 font-semibold" to="/login">Login Now</NavLink></h4> : ''}
                <form className="mt-8 space-y-6 max-w-[300px] md:max-w-[400px]  justify-center items-center mx-auto" encType='multipart/form-data'>

                    <div className="rounded-md shadow-sm">
                        <div className='my-2'>

                            <input id="name" type="text" name="name" onChange={handleDataChange} required value={registerDatas.name} className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Your Name" />
                        </div>
                        <div className='my-2'>

                            <input id="email-address" name="email" onChange={handleDataChange} type="email" autoComplete="email" required value={registerDatas.email} className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div className='my-2'>

                            <input id="address" name="address" onChange={handleDataChange} type="text" required value={registerDatas.address} className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Your address" />
                        </div>
                        <div className='my-2'>

                            <input id="phone" name="phone" type="tel" onChange={handleDataChange} required value={registerDatas.phone} className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Your Phone no" />
                        </div>
                        <div className='my-2'>

                            <input id="image" name="image" type="file" onChange={(e) => { setImages(e.target.files[0]) }} required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Your Phone no" />
                        </div>
                        <div className='my-2'>

                            <input id="password" name="password" type="password" onChange={handleDataChange} autoComplete="current-password" required value={registerDatas.password} className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between my-2">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>

                        {/* <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                </div> */}
                    </div>

                    <div>
                        <button type="submit" onClick={handleFormSubmit} className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <FaLock />
                            </span>
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="block text-sm mt-6">
                    <NavLink to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Already Have An Account? <span className='font-bold'>Login Now</span></NavLink>
                </div>
            </div>
        </>
    )
}

export default Register
