import type { FC } from 'react'
import type { Order } from '@/schemes/order'

import { useEffect } from 'react'
import { onValue, ref } from 'firebase/database'
import { useDispatch, useSelector } from 'react-redux'
import { initialize, changeOrderStatus } from '@/features/orders/orderSlice'
import Layout from '@/layouts/Layout'
import OrderCard from '@/components/OrderCard'
import NewOrderModal from '@/components/modals/NewOrderModal'
import { Grid } from '@/ui'
import { database } from '@/lib/firebase'
import { OrderStatus } from '@/utils/constants'

const OrdersPage: FC = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state: any) => state.orders.orders)
  const isOpenModal = useSelector((state: any) => state.orderModal.isOpen)

  useEffect(() => {
    const query = ref(database, 'orders')

    onValue(query, (snap) => {
      const data: Record<string, Order> = snap.val()

      if (snap.exists()) {
        dispatch(initialize(data))
      }
    })
  }, [dispatch])

  const updateOrderToProcess = ({ order }: { order: Order }): void => {
    dispatch(changeOrderStatus({ ...order, status: OrderStatus.IN_PROGRESS }))
  }

  const changeStatusCompletedOrder = ({ order }: { order: Order }): void => {
    dispatch(changeOrderStatus({ ...order, status: OrderStatus.FINALIZED }))
  }

  return (
    <Layout>
      <Grid $gap="24">
        {orders
          .filter((order: Order) => order.status !== OrderStatus.FINALIZED)
          .map((order: Order) => (
            <OrderCard
              key={order.id}
              order={order}
              updateOrderToProcess={updateOrderToProcess}
              changeStatusCompletedOrder={changeStatusCompletedOrder}
            />
          ))}
      </Grid>

      {isOpenModal && <NewOrderModal />}
    </Layout>
  )
}

export default OrdersPage
