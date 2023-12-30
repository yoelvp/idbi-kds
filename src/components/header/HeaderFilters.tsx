import type { FC } from 'react'
import type { Order } from '@/schemes/order'

import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '@/features/orders/orderSlice'
import { OrderStatus } from '@/utils/constants'
import { Button, Flex } from '@/ui'
import { IoTimerOutline } from 'react-icons/io5'
import { TbShoppingCartCancel } from 'react-icons/tb'
import { MdPendingActions } from 'react-icons/md'
import { BsBoxes, BsCartCheck } from 'react-icons/bs'

const HeaderFilters: FC = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state: any) => state.orders.orders)

  const handleFilterInProgress = (): void => {
    dispatch(setFilter('IN_PROGRESS'))
  }

  const handleFilterAll = (): void => {
    dispatch(setFilter('ALL'))
  }

  const handleFilterCancelled = (): void => {
    dispatch(setFilter('CANCELLED'))
  }

  const handleFilterPending = (): void => {
    dispatch(setFilter('REGISTERED'))
  }
  const handleFilterFinalized = (): void => {
    dispatch(setFilter('FINALIZED'))
  }

  return (
    <Flex $justifyContent="end" $width="100%" $paddingX="32">
      <Button
        $color="white"
        $display="flex"
        $justifyContent="center"
        $AlignItems="center"
        $gap="8"
        $bg="red-400"
        $rounded="8"
        style={{ width: 'auto' }}
        onClick={handleFilterPending}
      >
        <MdPendingActions size="24" />
        Pendientes
        <span>
          {
            orders.filter(
              (order: Order) =>
                order.status.toLowerCase() ===
                OrderStatus.REGISTERED.toLowerCase()
            ).length
          }
        </span>
      </Button>
      <Button
        $color="white"
        $display="flex"
        $justifyContent="center"
        $AlignItems="center"
        $gap="8"
        $bg="cyan-600"
        $rounded="8"
        style={{ width: 'auto' }}
        onClick={handleFilterFinalized}
      >
        <BsCartCheck size="24" />
        Finalizados
        <span>
          {
            orders.filter(
              (order: Order) =>
                order.status.toLowerCase() ===
                OrderStatus.FINALIZED.toLowerCase()
            ).length
          }
        </span>
      </Button>
      <Button
        $color="white"
        $display="flex"
        $justifyContent="center"
        $AlignItems="center"
        $gap="8"
        $bg="green-600"
        $rounded="8"
        style={{ width: 'auto' }}
        onClick={handleFilterInProgress}
      >
        <IoTimerOutline size="24" />
        En proceso
        <span>
          {
            orders.filter(
              (order: Order) =>
                order.status.toLowerCase() ===
                OrderStatus.IN_PROGRESS.toLowerCase()
            ).length
          }
        </span>
      </Button>
      <Button
        $color="white"
        $display="flex"
        $justifyContent="center"
        $AlignItems="center"
        $gap="8"
        $bg="yellow-500"
        $rounded="8"
        style={{ width: 'auto' }}
        onClick={handleFilterCancelled}
      >
        <TbShoppingCartCancel size="24" />
        Cancelados
        <span>
          {
            orders.filter(
              (order: Order) =>
                order.status.toLowerCase() ===
                OrderStatus.CANCELLED.toLowerCase()
            ).length
          }
        </span>
      </Button>
      <Button
        $color="white"
        $display="flex"
        $justifyContent="center"
        $AlignItems="center"
        $gap="8"
        $bg="slate-500"
        $rounded="8"
        style={{ width: 'auto' }}
        onClick={handleFilterAll}
      >
        <BsBoxes size="24" />
        Todos
      </Button>
    </Flex>
  )
}

export default HeaderFilters
