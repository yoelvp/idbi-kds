import type { FC } from 'react'
import type { Order } from '@/schemes/order'

import { useEffect } from 'react'
import { onValue, ref } from 'firebase/database'
import { useDispatch, useSelector } from 'react-redux'
import {
  initialize,
  changeOrderStatus,
  cancelOrder
} from '@/features/orders/orderSlice'
import Layout from '@/layouts/Layout'
import OrderCard from '@/components/OrderCard'
import NewOrderModal from '@/components/modals/NewOrderModal'
import { Box, Flex, Grid } from '@/ui'
import { database } from '@/lib/firebase'
import { OrderStatus } from '@/utils/constants'
import { selectFilteredOrders } from '@/features/orders/ordersFilter'

const OrdersPage: FC = () => {
  const dispatch = useDispatch()
  const orders = useSelector(selectFilteredOrders)
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

  const handleMakeOrder = ({ order }: { order: Order }): void => {
    dispatch(changeOrderStatus({ ...order, status: OrderStatus.IN_PROGRESS }))
  }

  const handleCompleteOrder = ({ order }: { order: Order }): void => {
    dispatch(changeOrderStatus({ ...order, status: OrderStatus.FINALIZED }))
  }

  const handleCancelOrder = ({ order }: { order: Order }): void => {
    dispatch(cancelOrder({ ...order, status: OrderStatus.CANCELLED }))
  }

  return (
    <Layout>
      {orders.length < 1 && (
        <Flex $justifyContent="center" $alignItems="center">
          <Box
            $bg="blue-600"
            $width="280px"
            $rounded="16"
            $padding="24"
            $textAlign="center"
          >
            No hay pedidos
          </Box>
        </Flex>
      )}

      <Grid $gap="24">
        {orders.map((order: Order) => (
          <OrderCard
            key={order.id}
            order={order}
            handleMakeOrder={handleMakeOrder}
            handleCompleteOrder={handleCompleteOrder}
            handleCancelOrder={handleCancelOrder}
          />
        ))}
      </Grid>

      {isOpenModal && <NewOrderModal />}
    </Layout>
  )
}

export default OrdersPage
