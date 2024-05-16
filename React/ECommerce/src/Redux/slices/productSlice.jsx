import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    productDetail: {},
    loading: false
}
//http istekleri atarken createAsyncThunk fonksiyonunu kullanıyoruz. bu fonksiyon isteiğin başarılı olup olmadığı bilgisini de bize verir.
const baseUrl = "https://fakestoreapi.com";
export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await axios.get(`${baseUrl}/products`);
    return response.data;
})

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProductDetail: (state, action) => {
            state.productDetail = action.payload;
        }
        //http istekleri dışındaki fonksiyonlar buraya yazılır. ve aşağı(export const {} = productSlice.actions)eklenir.
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false,
                state.products = action.payload;
        })
    }
})

export const { setProductDetail } = productSlice.actions

export default productSlice.reducer