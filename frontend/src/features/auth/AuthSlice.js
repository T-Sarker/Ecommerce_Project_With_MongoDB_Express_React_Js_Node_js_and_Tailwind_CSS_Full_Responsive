import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "./AuthService";

let user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    isLoading: false,
    isSuccess: false,
    user: user ? user : null,
    isError: false,
    msg: ''
}
/**
 * calling the api calling service here for Signup
 */
export const RegisterUser = createAsyncThunk('auth/register', async (registerData, thunkAPI) => {
    try {
        const result = await AuthService.registerUser(registerData)
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error.response.data)
    }
})
/**
 * calling the api calling service here for signin
 */
export const LoginUser = createAsyncThunk('auth/login', async (loginData, thunkAPI) => {
    try {
        const result = await AuthService.loginUser(loginData)
        return result
    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error.response.data)
    }
})
/**
 * calling the api calling service here for signout
 */
export const LogoutUser = createAsyncThunk('auth/logout', async (thunkAPI) => {
    try {
        const result = await AuthService.logoutUser()

    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error.response.data)
    }
})


export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // //signup cases
            .addCase(RegisterUser.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(RegisterUser.fulfilled, (state, action) => {
                state.isSuccess = true

            })
            .addCase(RegisterUser.rejected, (state, action) => {
                state.isError = true
                state.msg = action.payload
            })

            // login cases
            .addCase(LoginUser.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(LoginUser.rejected, (state, action) => {
                state.isError = true
                state.msg = action.payload
            })


            // logout cases
            .addCase(LogoutUser.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(LogoutUser.fulfilled, (state, action) => {
                state.isSuccess = true
            })
            .addCase(LogoutUser.rejected, (state, action) => {
                state.isError = true
                state.msg = action.payload
            })
    }
})


export default AuthSlice.reducer