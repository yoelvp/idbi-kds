import { configureStore } from '@reduxjs/toolkit'
import orderSlice from '@/features/orders/orderSlice'
import newOrderModalSlice from '@/features/modals/newOrderModalSlice'

export const store = configureStore({
  reducer: {
    orders: orderSlice,
    orderModal: newOrderModalSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
