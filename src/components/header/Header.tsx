import type { FC } from 'react'

import { Button, Flex, Header as HeaderStyled, IconText, Link } from '@/ui'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onOpen } from '@/features/modals/newOrderModalSlice'
import Clock from './Clock'

const Header: FC = () => {
  const dispatch = useDispatch()
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

      <Flex>
        <Button $color="blue-600" $bg='yellow-200' onClick={handleOpenOrderModal}>
          Nuevo pedido
        </Button>
      </Flex>
    </HeaderStyled>
  )
}

export default Header
