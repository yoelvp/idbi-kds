interface OrderContent {
  name: string
  quantity: number
  unit: string
  details: string
}

type OrderIndex = Record<number, OrderContent>

export interface Order {
  id: number
  time: string
  date: string
  orders: Order[]
}
