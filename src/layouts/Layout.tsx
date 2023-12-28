import type { FC, ReactNode } from 'react'

import Header from '@/components/header/Header'
import { Container, WrapperContent } from '@/ui'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      <WrapperContent as='main'>
        {children}
      </WrapperContent>
    </Container>
  )
}

export default Layout
