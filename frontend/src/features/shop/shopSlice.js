import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ShopService from "./shopService";

const initialState = {
    isSLoading: false,
    isSSuccess: false,
    filteredProduct: null,
    isSError: false,
    Smsg: ''
}

export const filteredProductlist = createAsyncThunk('filter/product', async (filterData, thunkAPI) => {
    try {
        const result = await ShopService.filteredProducts(filterData)
        return result
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data)
    }
})


export const ShopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(filteredProductlist.pending, (state, action) => {
                state.isSLoading = true
            })
            .addCase(filteredProductlist.fulfilled, (state, action) => {
                state.isSSuccess = true
                state.filteredProduct = action.payload
            })
            .addCase(filteredProductlist.rejected, (state, action) => {
                state.isSError = true
                state.Smsg = action.payload
            })
    }
})

export default ShopSlice.reducer