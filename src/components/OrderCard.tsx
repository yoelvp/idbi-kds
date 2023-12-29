import type { FC } from 'react'
import type { Order } from '@/schemes/order'

import {
  Box,
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
import { OrderStatus } from '@/utils/constants'

interface Props {
  order: Order
  updateOrderToProcess?: ({ order }: { order: Order }) => void
  changeStatusCompletedOrder?: ({ order }: { order: Order }) => void
}

const OrderCard: FC<Props> = ({
  order,
  updateOrderToProcess,
  changeStatusCompletedOrder
}) => {
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
        {order.status === OrderStatus.FINALIZED && (
          <Box $bg="green-500" $rounded="4">
            Pedido entregado
          </Box>
        )}

        {order.status !== OrderStatus.FINALIZED && (
          <Flex>
            <Button
              $bg="green-600"
              $color="white"
              disabled={
                order.status.toLowerCase() === OrderStatus.IN_PROGRESS.toLowerCase()
              }
              onClick={() => updateOrderToProcess?.({ order })}
            >
              Iniciar
            </Button>
            <Button
              $bg="red-600"
              $color="white"
              disabled={
                order.status.toLowerCase() !== OrderStatus.IN_PROGRESS.toLowerCase()
              }
              onClick={() => changeStatusCompletedOrder?.({ order })}
            >
              Finalizar
            </Button>
          </Flex>
        )}
      </CardFooter>
    </Card>
  )
}

export default OrderCard
