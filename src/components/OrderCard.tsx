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
  List,
  ListItem,
  Table,
  Tbody,
  Td,
  Text,
  Tr
} from '@/ui'
import { IoMdClose } from 'react-icons/io'
import { OrderStatus } from '@/utils/constants'

interface Props {
  order: Order
  handleMakeOrder?: ({ order }: { order: Order }) => void
  handleCompleteOrder?: ({ order }: { order: Order }) => void
  handleCancelOrder?: ({ order }: { order: Order }) => void
}

const OrderCard: FC<Props> = ({
  order,
  handleMakeOrder,
  handleCompleteOrder,
  handleCancelOrder
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTime>{order.time}</CardTime>
        <Box
          $bg={
            order.status === OrderStatus.IN_PROGRESS ? 'green-600' : 'blue-600'
          }
          $rounded="8"
          style={{ width: 'auto' }}
        >
          {order.status}
        </Box>
        <CardButtonClose onClick={() => handleCancelOrder?.({ order })}>
          <IoMdClose size="18" />
        </CardButtonClose>
      </CardHeader>
      <CardBody>
        <Table>
          <Tbody>
            {order.orders.map((ord, index) => (
              <Tr key={index}>
                <Td $bottomLine={index !== order.orders.length - 1}>
                  <Flex $flexDirection="column">
                    <Text $fontSize="18" $color="white">
                      {ord.name}
                    </Text>
                    <List>
                      {Boolean(ord.details) &&
                        ord.details.split(',').map((det) => (
                          <ListItem
                            key={det}
                            $bg="blue-700"
                            $rounded="4"
                            $paddingX="4"
                            $paddingY="2"
                          >
                            {det}
                          </ListItem>
                        ))}
                    </List>
                  </Flex>
                </Td>
                <Td $bottomLine={index !== order.orders.length - 1}>
                  <Text $fontSize="24" $color="white">
                    x{ord.quantity}
                  </Text>
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
        {order.status === OrderStatus.CANCELLED && (
          <Box $bg="yellow-400" $rounded="4">
            Pedido cancelado
          </Box>
        )}

        {order.status.toLowerCase() !== OrderStatus.CANCELLED.toLowerCase() &&
          order.status.toLowerCase() !==
            OrderStatus.FINALIZED.toLowerCase() && (
            <Flex>
              <Button
                $bg="green-600"
                $color="white"
                disabled={
                  order.status.toLowerCase() ===
                  OrderStatus.IN_PROGRESS.toLowerCase()
                }
                onClick={() => handleMakeOrder?.({ order })}
              >
                Iniciar
              </Button>
              <Button
                $bg="red-600"
                $color="white"
                disabled={
                  order.status.toLowerCase() !==
                  OrderStatus.IN_PROGRESS.toLowerCase()
                }
                onClick={() => handleCompleteOrder?.({ order })}
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
