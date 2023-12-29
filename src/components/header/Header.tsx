import type { FC } from 'react'

import { Box, Button, Flex, Header as HeaderStyled, IconText, Link } from '@/ui'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onOpen } from '@/features/modals/newOrderModalSlice'
import Clock from './Clock'
import { type Order } from '@/schemes/order'
import { IoTimerOutline } from 'react-icons/io5'

const Header: FC = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state: any) => state.orders.orders)
  const { pathname } = useLocation()

  const handleOpenOrderModal = (): void => {
    dispatch(onOpen())
  }

  return (
    <HeaderStyled>
      <Flex as="nav" $alignItems="center" $gap="24">
        <IconText to="/">KDS IDBi</IconText>

        <Flex $alignItems="center">
          <Link
            to="/"
            $bg={pathname === '/' ? 'yellow-200' : 'transparent'}
            $color={pathname === '/' ? 'blue-600' : 'white'}
          >
            Pedidos
          </Link>
          <Link
            to="/history"
            $bg={pathname === '/history' ? 'yellow-200' : 'transparent'}
            $color={pathname === '/history' ? 'blue-600' : 'white'}
          >
            Historial
          </Link>
        </Flex>
      </Flex>

      <Clock />

      <Flex $alignItems="center">
        <Box
          $color="white"
          $display="flex"
          $justifyContent="center"
          $AlignItems="center"
          $gap="8"
          $bg='blue-600'
        >
          <IoTimerOutline size="24" />
          En proceso
          <span>
            {
              orders.filter(
                (order: Order) =>
                  order.status.toLocaleLowerCase() === 'en proceso'
              ).length
            }
          </span>
        </Box>
        <Button
          $color="blue-600"
          $bg="yellow-200"
          onClick={handleOpenOrderModal}
        >
          Nuevo pedido
        </Button>
      </Flex>
    </HeaderStyled>
  )
}

export default Header
