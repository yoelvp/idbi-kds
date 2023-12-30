import type { RootState } from '@/app/store'
import type { Order } from '@/schemes/order'

import { OrderStatus } from '@/utils/constants'

export const selectFilteredOrders = (state: RootState): Order[] => {
  const { orders, filter } = state.orders

  if (filter === 'ALL') {
    return orders
    // .filter(
    //   (order) =>
    //     order.status.toLowerCase() === OrderStatus.REGISTERED.toLowerCase() ||
    //     order.status.toLowerCase() === OrderStatus.IN_PROGRESS.toLowerCase() ||
    //     order.status.toLowerCase() === OrderStatus.FINALIZED.toLowerCase()
    // )
  }

  if (filter === 'FINALIZED') {
    return orders.filter(
      (order) =>
        order.status.toLowerCase() === OrderStatus.FINALIZED.toLowerCase()
    )
  }

  if (filter === 'REGISTERED') {
    return orders.filter(
      (order) =>
        order.status.toLowerCase() === OrderStatus.REGISTERED.toLowerCase()
    )
  }

  if (filter === 'IN_PROGRESS') {
    return orders.filter(
      (order) =>
        order.status.toLowerCase() === OrderStatus.IN_PROGRESS.toLowerCase()
    )
  }

  if (filter === 'CANCELLED') {
    return orders.filter(
      (order) =>
        order.status.toLowerCase() === OrderStatus.CANCELLED.toLowerCase()
    )
  }

  return orders
}
