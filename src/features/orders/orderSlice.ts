import type { Order } from '@/schemes/order'

import { createSlice } from '@reduxjs/toolkit'
import { ReduxSliceNames } from '@/utils/constants'
import { push, ref, update } from 'firebase/database'
import { database } from '@/lib/firebase'

interface InitialState {
  orders: Order[]
}

const initialState: InitialState = {
  orders: []
}

export const orderSlice = createSlice({
  name: ReduxSliceNames.tasks,
  initialState,
  reducers: {
    initialize: (state, action) => {
      state.orders = action.payload
    },
    addNewOrder: (state, action) => {
      const order = action.payload as Order

      const newOrderKey = push(ref(database, 'orders')).key
      const updates: Record<string, Order> = {}
      updates[`/orders/${newOrderKey}`] = order
      update(ref(database), updates)
      state.orders.push(order)
    },
    changeOrderStatus: (state, action) => {
      const updatedOrder = action.payload as Order
      const orderId = updatedOrder.id

      state.orders = state.orders.map((order) =>
        order.id === orderId ? { ...order, status: 'En proceso' } : order
      )
    }
  }
})

export const { initialize, addNewOrder, changeOrderStatus } = orderSlice.actions
export default orderSlice.reducer
