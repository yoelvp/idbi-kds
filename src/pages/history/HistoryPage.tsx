import type { FC } from 'react'
import type { Order } from '@/schemes/order'

import { useSelector } from 'react-redux'
import Layout from '@/layouts/Layout'
import OrderCard from '@/components/OrderCard'
import { Grid } from '@/ui'
import { OrderStatus } from '@/utils/constants'

const HistoryPage: FC = () => {
  const orders = useSelector((state: any) => state.orders.orders)
  return (
    <Layout>
      <Grid $gap="24">
        {orders
          .filter((order: Order) => order.status === OrderStatus.FINALIZED)
          .map((order: Order) => (
            <OrderCard key={order.id} order={order} />
          ))}
      </Grid>
    </Layout>
  )
}

export default HistoryPage
