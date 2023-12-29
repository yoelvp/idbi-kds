import type { FC } from 'react'

import { useState } from 'react'

import { Button, Flex, Header as HeaderStyled, IconText, Link } from '@/ui'
import { useLocation } from 'react-router-dom'
import NewOrderModal from '../modals/NewOrderModal'

const Header: FC = () => {
  const { pathname } = useLocation()
  const [isOpenOrderModal, setIsOpenOrderModal] = useState(false)

  const handleOpenOrderModal = (): void => {
    setIsOpenOrderModal(!isOpenOrderModal)
  }

  return (
    <>
      <HeaderStyled>
        <Flex as="nav" $alignItems="center" $gap="24">
          <IconText to="/">KDS IDBi</IconText>

          <Flex $alignItems="center">
            <Link
              to="/"
              $bg={pathname === '/' ? 'yellow.200' : 'white.50'}
              $color={pathname === '/' ? 'blue.600' : 'white.50'}
            >
              Pedidos
            </Link>
            <Link
              to="/history"
              $bg={pathname === '/history' ? 'yellow.200' : 'white.50'}
              $color={pathname === '/history' ? 'blue.600' : 'white.50'}
            >
              Historial
            </Link>
          </Flex>
        </Flex>

        <time
          dateTime="2023-12-28T12:39:00"
          style={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold' }}
        >
          {new Date().getHours().toString()}:
          {new Date().getMinutes().toString()}
        </time>

        <Flex>
          <Button $color="blue.600" onClick={handleOpenOrderModal}>
            Nuevo pedido
          </Button>
          <Button $color="blue.600">Cambiar tema</Button>
        </Flex>
      </HeaderStyled>

      {isOpenOrderModal && <NewOrderModal />}
    </>
  )
}

export default Header
