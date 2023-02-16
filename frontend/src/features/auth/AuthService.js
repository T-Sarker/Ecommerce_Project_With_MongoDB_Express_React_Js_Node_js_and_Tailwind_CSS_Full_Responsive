import axios from 'axios'
const baseUrl = "http://localhost:4000/api"

const registerUser = async (registerData) => {
    try {
        console.log(process.env.REACT_APP_BASE_URL);
        const result = await axios.post(`${baseUrl}/user/register`, registerData)
        if (result.data) {
            return result.data
        }
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async (loginData) => {
    try {
        console.log(process.env.REACT_APP_BASE_URL);
        const result = await axios.post(`${baseUrl}/user/login`, loginData)
        if (result.data) {
            localStorage.setItem('user', JSON.stringify(result.data))
            return result.data
        }
    } catch (error) {
        console.log(error);
    }
}

const logoutUser = async () => {
    localStorage.removeItem('user')
}

const AuthService = {
    registerUser, loginUser, logoutUser
}

export default AuthService