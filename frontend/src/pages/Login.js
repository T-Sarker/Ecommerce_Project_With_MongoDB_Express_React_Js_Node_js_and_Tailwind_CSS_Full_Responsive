import React, { useState, useEffect } from 'react'
import { FaLock } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { LoginUser } from '../features/auth/AuthSlice'
import { toast } from 'react-toastify';

const Login = () => {

    const dispatch = useDispatch()
    const { isLoading, user, isSuccess, isError, msg } = useSelector((state) => (state.auth))
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleLoginData = (e) => {
        setLoginData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loginData.email === '' || loginData.password === '') {
            toast.error("FIleds Can't be empty")
        } else {

            dispatch(LoginUser(loginData))
        }
    }

    useEffect(() => {

        if (isSuccess) {
            console.log(isSuccess);
            toast.success("Login Successfull")
        }
        if (isError) {
            console.log(isError + msg);
            toast.error(msg)
        }
        if (user) {
            navigate('/')
        }
    }, [isLoading, isError, user])
    return (
        <>
            <div className="w-4/5  pt-24 h-screen  justify-center items-center mx-auto text-center">
                <h2 className='text-3xl font-bold'>Login Now</h2>
                <form className="mt-8 space-y-6 max-w-[300px] md:max-w-[400px]  justify-center items-center mx-auto" action="#" method="POST">

                    <div className="rounded-md shadow-sm">
                        <div className='my-2'>

                            <input id="email-address" name="email" type="email" onChange={handleLoginData} autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div className='my-2'>

                            <input id="password" name="password" type="password" onChange={handleLoginData} autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between my-2">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>

                    </div>

                    <div>
                        <button type="submit" onClick={handleSubmit} className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <FaLock />
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="block text-sm mt-6">
                    <NavLink to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Don't Have An Account? <span className='font-bold'>Register Now</span></NavLink>
                </div>
            </div>
        </>
    )
}

export default Login
