import { lazy, type FC, Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'

const OrdersPage = lazy(async () => await import('@/pages/orders/OrdersPage'))
const HistoryPage = lazy(
  async () => await import('@/pages/history/HistoryPage')
)

const Routing: FC = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<OrdersPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Suspense>
  )
}
export default Routing
