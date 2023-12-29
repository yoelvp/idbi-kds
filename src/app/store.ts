import { configureStore } from '@reduxjs/toolkit'
import orderSlice from '@/features/orders/orderSlice'

export const store = configureStore({
  reducer: {
    orders: orderSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
