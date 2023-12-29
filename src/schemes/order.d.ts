interface OrderContent {
  name: string
  quantity: number
  unit: string
  details: string
}

type OrderIndex = Record<number, OrderContent>

export interface Order {
  id: string
  date: string
  orders: OrderContent[]
  status: string
  time: string
}
