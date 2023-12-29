import type { FC } from 'react'
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

interface Props {
  order: any
}

const OrderCard: FC<Props> = ({ order }) => {
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
                  <p>Fried Chicken</p>
                </Flex>
              </Td>
              <Td $bottomLine>x6</Td>
            </Tr>
            <Tr>
              <Td $bottomLine>Vanilla Cake</Td>
              <Td $bottomLine>x7</Td>
            </Tr>
            <Tr>
              <Td>Matcha Latte</Td>
              <Td>x3</Td>
            </Tr>
          </Tbody>
        </Table>
      </CardBody>
      <CardFooter>
        <Flex>
          <Button $bg="green.600">Finalizar</Button>
          <Button>Iniciar</Button>
        </Flex>
      </CardFooter>
    </Card>
  )
}

export default OrderCard
