import { useState, type FC } from 'react'

import Modal from '@/components/Modal'
import { Flex, Input } from '@/ui'
import { ButtonAction } from '@/ui/components/button'
import { IoMdAdd } from 'react-icons/io'

const NewOrderModal: FC = () => {
  const [numOrders, setNumOrders] = useState(1)

  const handleAddOrder = (): void => {
    setNumOrders(numOrders + 1)
  }

  return (
    <Modal title="Nuevo pedido">
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
                  $bg="yellow.200"
                  $color="blue.800"
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
    </Modal>
  )
}

export default NewOrderModal
