import type { FC } from 'react'
import type { Order } from '@/schemes/order'

import {
  Button,
  Card,
  CardBody,
  CardButtonClose,
  CardFooter,
  CardHeader,
  CardTime,
  Flex,
  Table,
  Tbody,
  Td,
  Tr
} from '@/ui'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { changeOrderStatus } from '@/features/orders/orderSlice'

interface Props {
  order: Order
}

const OrderCard: FC<Props> = ({ order }) => {
  const dispatch = useDispatch()

  const updateOrderToProcess = ({ order }: { order: Order }): void => {
    dispatch(changeOrderStatus({ ...order, status: 'En proceso' }))
  }

  const changeStatusCompletedOrder = ({ order }: { order: Order }): void => {
    dispatch(changeOrderStatus({ ...order, status: 'finalizado' }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTime>{order.time}</CardTime>
        <CardButtonClose>
          <IoMdClose size="18" />
        </CardButtonClose>
      </CardHeader>
      <CardBody>
        <Table>
          <Tbody>
            {order.orders.map((ord, index) => (
              <Tr key={index}>
                <Td $bottomLine={index !== order.orders.length - 1}>
                  <Flex>
                    <p>{ord.name}</p>
                  </Flex>
                </Td>
                <Td $bottomLine={index !== order.orders.length - 1}>
                  x{ord.quantity}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </CardBody>
      <CardFooter>
        <Flex>
          <Button
            $bg="green-600"
            $color="white"
            disabled={order.status.toLocaleLowerCase() === 'en proceso' || order.status.toLocaleLowerCase() === 'finalizado'}
            onClick={() => updateOrderToProcess({ order })}
          >
            Iniciar
          </Button>
          <Button
            $bg="red-600"
            $color="white"
            disabled={order.status.toLocaleLowerCase() !== 'en proceso'}
            onClick={() => changeStatusCompletedOrder({ order })}
          >
            Finalizar
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  )
}

export default OrderCard
