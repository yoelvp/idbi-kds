import type { FC } from 'react'
import type { Order } from '@/schemes/order'

import { useEffect } from 'react'
import Layout from '@/layouts/Layout'
import { Grid } from '@/ui/components/grid'
import { onValue, ref } from 'firebase/database'
import { useDispatch, useSelector } from 'react-redux'
import { database } from '@/lib/firebase'
import { initialize } from '@/features/orders/orderSlice'
import OrderCard from '@/components/OrderCard'
import NewOrderModal from '@/components/modals/NewOrderModal'

const OrdersPage: FC = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state: any) => state.orders.orders)
  const isOpenModal = useSelector((state: any) => state.orderModal.isOpen)

  useEffect(() => {
    const query = ref(database, 'orders')

    onValue(query, (snap) => {
      const data: Record<string, Order> = snap.val()

      const newData: Order[] = Object.values(data).map(d => {
        const newOrders = Object.values(d.orders).map(ord => ({
          name: ord.name,
          quantity: ord.quantity,
          unit: ord.unit,
          details: ord.details
        }))

        return {
          id: d.id,
          date: d.date,
          time: d.time,
          status: d.status,
          orders: newOrders
        }
      })

      if (snap.exists()) {
        dispatch(initialize(newData))
      }
    })
  }, [dispatch])

  return (
    <Layout>
      <Grid $gap="24">
        {orders.map((order: Order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </Grid>

      {isOpenModal && <NewOrderModal />}
    </Layout>
  )
}

export default OrdersPage
