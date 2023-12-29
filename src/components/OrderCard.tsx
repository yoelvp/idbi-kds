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
            <Tr>
              <Td $bottomLine>
                <Flex>
                  <p>Producto</p>
                </Flex>
              </Td>
              <Td $bottomLine>x7</Td>
            </Tr>
          </Tbody>
        </Table>
      </CardBody>
      <CardFooter>
        <Flex>
          {order.status}
          <Button
            $bg="green-600"
            $color="white"
            onClick={() => dispatch(changeOrderStatus(order))}
          >
            Iniciar
          </Button>
          <Button $bg="red-600" $color="white">
            Finalizar
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  )
}

export default OrderCard
