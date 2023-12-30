import type { Order } from '@/schemes/order'
import type { OrderStatus } from '@/utils/constants'

import { createSlice } from '@reduxjs/toolkit'
import { ReduxSliceNames } from '@/utils/constants'
import { ref, update } from 'firebase/database'
import { database } from '@/lib/firebase'

interface InitialState {
  orders: Order[]
  filter: keyof typeof OrderStatus
}

const initialState: InitialState = {
  orders: [],
  filter: 'ALL'
}

export const orderSlice = createSlice({
  name: ReduxSliceNames.tasks,
  initialState,
  reducers: {
    initialize: (state, action) => {
      const orders: Record<string, Order> = action.payload

      const ordersFormated = Object.keys(orders).map((orderId) => ({
        ...orders[orderId],
        id: orderId
      }))

      state.orders = ordersFormated
    },
    addNewOrder: (state, action) => {
      const order = action.payload as Order

      const updates: Record<string, Order> = {}
      updates[`/orders/${order.id}`] = order
      update(ref(database), updates)
      state.orders.push(order)
    },
    changeOrderStatus: (state, action) => {
      const updatedOrder = action.payload as Order
      const orderId = updatedOrder.id

      state.orders = state.orders.map((order) =>
        order.id === orderId ? updatedOrder : order
      )

      const orderRef = ref(database, `/orders/${orderId}`)
      update(orderRef, updatedOrder)
    },
    finalizeOrder: (state, action) => {
      const updatedOrder = action.payload as Order
      const orderId = updatedOrder.id

      state.orders = state.orders.map((order) =>
        order.id === orderId ? updatedOrder : order
      )

      const orderRef = ref(database, `/orders/${orderId}`)
      update(orderRef, updatedOrder)
    },
    cancelOrder: (state, action) => {
      const updatedOrder = action.payload as Order
      const orderId = updatedOrder.id

      state.orders = state.orders.map((order) =>
        order.id === orderId ? updatedOrder : order
      )

      const orderRef = ref(database, `/orders/${orderId}`)
      update(orderRef, updatedOrder)
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    }
  }
})

export const {
  initialize,
  addNewOrder,
  changeOrderStatus,
  cancelOrder,
  setFilter
} = orderSlice.actions
export default orderSlice.reducer
