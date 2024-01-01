import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import productsAnalyticsSlice from '../features/productAnalytics/productAnalyticsSlice'
export const store = configureStore({
    reducer: {
        productsAnalyticsReducer: productsAnalyticsSlice,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
