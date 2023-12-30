import type { FC } from 'react'
import type { Order } from '@/schemes/order'

import { useSelector } from 'react-redux'
import Layout from '@/layouts/Layout'
import OrderCard from '@/components/OrderCard'
import { Grid } from '@/ui'
import { selectFilteredOrders } from '@/features/orders/ordersFilter'

const HistoryPage: FC = () => {
  const orders = useSelector(selectFilteredOrders)

  return (
    <Layout>
      <Grid $gap="24">
        {orders.map((order: Order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </Grid>
    </Layout>
  )
}

export default HistoryPage
