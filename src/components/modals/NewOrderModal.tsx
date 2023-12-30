import type { FC } from 'react'

import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Modal from '@/components/Modal'
import { Box, Flex, Input } from '@/ui'
import { Button, ButtonAction } from '@/ui/components/button'
import { IoMdAdd } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { addNewOrder } from '@/features/orders/orderSlice'
import { onClose } from '@/features/modals/newOrderModalSlice'
import { currentFormattedDate, getHourAndTime } from '@/utils/time'
import { OrderStatus } from '@/utils/constants'

interface OrderForm {
  name: string
  quantity: number
  unit: string
  details: string
}

const NewOrderModal: FC = () => {
  const [numOrders, setNumOrders] = useState(1)
  const [orderForms, setOrderForms] = useState<OrderForm[]>([])
  const dispatch = useDispatch()

  const handleAddOrder = (): void => {
    setNumOrders(numOrders + 1)
  }

  const handleCloseOrderModal = (): void => {
    dispatch(onClose())
  }

  const handleFormChange = (
    index: number,
    field: keyof OrderForm,
    value: string | number
  ): void => {
    const updatedForms = [...orderForms]
    updatedForms[index] = {
      ...updatedForms[index],
      [field]: value
    }

    setOrderForms(updatedForms)
  }

  const addOrder = (): void => {
    const newOrder = {
      id: uuid(),
      time: getHourAndTime(),
      date: currentFormattedDate(),
      status: OrderStatus.REGISTERED,
      orders: orderForms
    }

    dispatch(addNewOrder(newOrder))
    setNumOrders(0)
    setOrderForms([])
    dispatch(onClose())
  }

  return (
    <Modal title="Nuevo pedido" onClose={handleCloseOrderModal}>
      <form>
        <Flex $flexDirection="column" $gap="24">
          {[...Array(numOrders)].map((_, index) => (
            <Flex key={index} $flexDirection="column">
              <Flex $gap="16">
                <Input
                  type="number"
                  onChange={(e) =>
                    handleFormChange(index, 'quantity', e.target.value)
                  }
                  placeholder="Cantidad (*)"
                />
                <Input
                  type="text"
                  list="product"
                  onChange={(e) =>
                    handleFormChange(index, 'name', e.target.value)
                  }
                  placeholder="Nombre del producto (*)"
                />

                <Input
                  type="text"
                  list="product"
                  placeholder="Unidad"
                  onChange={(e) =>
                    handleFormChange(index, 'unit', e.target.value)
                  }
                />
              </Flex>
              <Input
                placeholder="Escribe los detalles (separado por `,`)"
                onChange={(e) =>
                  handleFormChange(index, 'details', e.target.value)
                }
              />
              <Box $display="flex" $justifyContent="end">
                {index === numOrders - 1 && (
                  <ButtonAction
                    onClick={handleAddOrder}
                    type="button"
                    $bg="yellow-200"
                    $color="blue-800"
                  >
                    <IoMdAdd size="18" />
                    Agregar
                  </ButtonAction>
                )}
              </Box>
            </Flex>
          ))}
        </Flex>

        {/* Datalist of products */}
        <datalist id="product">
          <option value="Chicken Fried"></option>
          <option value="Vanilla Cake"></option>
          <option value="Cupcake"></option>
        </datalist>
      </form>

      <Box $display="flex" $justifyContent="end">
        <Button
          $bg="blue-600"
          $color="white"
          onClick={addOrder}
          $marginTop="24"
        >
          Registrar pedido
        </Button>
      </Box>
    </Modal>
  )
}

export default NewOrderModal
