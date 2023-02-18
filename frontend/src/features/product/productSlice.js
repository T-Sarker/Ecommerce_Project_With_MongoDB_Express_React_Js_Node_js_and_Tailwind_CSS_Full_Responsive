import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ProductService from './productService'

const initialState = {
    isPLoading: false,
    isPSuccess: false,
    isPError: false,
    category: null,
    brands: null,
    products: null,
    Pmsg: ''
}

export const getAllProducts = createAsyncThunk('product/all', async (thunkAPI) => {
    try {
        const result = await ProductService.allProducts()
        return result
    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error.response.data)
    }
})

//getting all the categories
export const getAllCategory = createAsyncThunk('category/all', async (thunkAPI) => {
    try {
        const result = await ProductService.allCategory()
        return result
    } catch (error) {
        console.log(error);
        thunkAPI.rejectWithValue(error.response.data)
    }
})

export const getAllBrands = createAsyncThunk('brand/all', async () => {
    try {
        const result = await ProductService.allBrands()
        return result
    } catch (error) {
        console.log(error);
    }
})



const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state, action) => {
                state.isPLoading = true
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isPSuccess = true
                state.products = action.payload
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isPError = true
                state.Pmsg = action.payload
            })

            .addCase(getAllCategory.pending, (state, action) => {
                state.isPLoading = true
            })
            .addCase(getAllCategory.fulfilled, (state, action) => {
                state.isPSuccess = true
                state.category = action.payload
            })
            .addCase(getAllCategory.rejected, (state, action) => {
                state.isPError = true
                state.Pmsg = action.payload
            })

            .addCase(getAllBrands.pending, (state, action) => {
                state.isPLoading = true
            })
            .addCase(getAllBrands.fulfilled, (state, action) => {
                state.isPSuccess = true
                state.brands = action.payload
            })
            .addCase(getAllBrands.rejected, (state, action) => {
                state.isPError = true
                state.Pmsg = action.payload
            })
    }
})

export default ProductSlice.reducer