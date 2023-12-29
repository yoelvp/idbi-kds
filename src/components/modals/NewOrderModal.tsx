import type { FC } from 'react'

import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Modal from '@/components/Modal'
import { Flex, Input } from '@/ui'
import { Button, ButtonAction } from '@/ui/components/button'
import { IoMdAdd } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { addNewOrder } from '@/features/orders/orderSlice'
import { onClose } from '@/features/modals/newOrderModalSlice'

const NewOrderModal: FC = () => {
  const [numOrders, setNumOrders] = useState(1)
  const dispatch = useDispatch()

  const handleAddOrder = (): void => {
    setNumOrders(numOrders + 1)
  }

  const handleCloseOrderModal = (): void => {
    dispatch(onClose())
  }

  const addOrder = (): void => {
    const newOrder = {
      id: uuid(),
      time: '11:32',
      date: '2023-12-29T11:32:65',
      status: 'En proceso',
      orders: [
        {
          name: 'Chicken',
          quantity: 2,
          unit: 4,
          details: 'Mayonesa extra'
        }
      ]
    }

    dispatch(addNewOrder(newOrder))
  }

  return (
    <Modal title="Nuevo pedido" onClose={handleCloseOrderModal}>
      <form>
        <Flex $flexDirection="column" $gap="24">
          {[...Array(numOrders)].map((_, index) => (
            <Flex key={index} $gap="16">
              <Input type="number" placeholder="Cantidad" />
              <Input
                type="text"
                list="product"
                placeholder="Escribe el nombre del producto"
              />

              {index === numOrders - 1 && (
                <ButtonAction
                  onClick={handleAddOrder}
                  type="button"
                  $bg="yellow-200"
                  $color="blue-800"
                >
                  <IoMdAdd size="18" />
                </ButtonAction>
              )}
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

      <Button onClick={addOrder}>Agregar nuevo pedido</Button>
    </Modal>
  )
}

export default NewOrderModal
