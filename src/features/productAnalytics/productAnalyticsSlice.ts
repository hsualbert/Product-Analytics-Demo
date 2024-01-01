import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

import Product from '../../models/product'
import MockData from '../../resources/stackline_frontend_assessment_data_2021.json'

export interface CountryState {
    products: Product[]
    selectIndex: number
    status: 'idle' | 'loading' | 'failed'
    error: string
}

const initialState: CountryState = {
    products: [],
    status: 'idle',
    error: '',
    selectIndex: 0,
}

export const getMockData = createAsyncThunk('get/mockData', async () => {
    return new Promise<{ data: Product[] }>((resolve) =>
        setTimeout(() => resolve({ data: MockData }), 1000)
    )
})

export const productsAnalyticsSlice = createSlice({
    name: 'productsAnalytics',
    initialState,
    reducers: {
        changeSelectedProduct: (state, action: PayloadAction<number>) => {
            state.selectIndex = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMockData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getMockData.fulfilled, (state, action) => {
                state.status = 'idle'
                state.selectIndex = 0
                state.products = action.payload.data
            })
            .addCase(getMockData.rejected, (state) => {
                state.status = 'failed'
            })
    },
})

export const { changeSelectedProduct } = productsAnalyticsSlice.actions

export const selectProduct = (state: RootState) => {
    if (
        state.productsAnalyticsReducer.selectIndex <
        state.productsAnalyticsReducer.products.length
    ) {
        return state.productsAnalyticsReducer.products[
            state.productsAnalyticsReducer.selectIndex
        ]
    }
    return null
}

export const selectStatus = (state: RootState) => {
    return state.productsAnalyticsReducer.status
}

export default productsAnalyticsSlice.reducer
