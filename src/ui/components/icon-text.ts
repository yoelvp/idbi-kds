import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const IconText = styled(Link)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors['yellow-200']};
  font-weight: bold;
  text-decoration: none;
`
