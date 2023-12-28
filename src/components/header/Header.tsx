import type { FC } from 'react'

import { Flex, Header as HeaderStyled, IconText, Link } from '@/ui'

const Header: FC = () => {
  return (
    <HeaderStyled>
      <Flex as="nav" $alignItems='center' $gap='24'>
        <IconText to="/">KDS IDBI</IconText>

        <Flex $alignItems='center'>
          <Link to="/">Pedidos</Link>
          <Link to="/history">Historial</Link>
        </Flex>
      </Flex>

      <time dateTime="2023-12-28T12:39:00">
        {new Date().getFullYear().toString()}
      </time>

      <div>
        <button>Nuevo pedido</button>
        <button>Cambiar tema</button>
      </div>
    </HeaderStyled>
  )
}

export default Header
