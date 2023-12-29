import type { FC, ReactNode } from 'react'
import { CardBody, CardHeader, Card as CardStyled } from '@/ui'

interface Props {
  children: ReactNode
}

interface CardComponent extends FC<Props> {
  Header: FC<Props>
  Body: FC<Props>
}

const Card: CardComponent = ({ children, ...rest }) => {
  return <CardStyled {...rest}>{children}</CardStyled>
}

Card.Header = ({ children, ...rest }) => {
  return <CardHeader {...rest}>{children}</CardHeader>
}

Card.Body = ({ children, ...rest }) => {
  return <CardBody {...rest}>{children}</CardBody>
}

export default Card
