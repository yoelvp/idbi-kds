import styled, { css } from 'styled-components'

export const Table = styled.table`
  width: 100%;
  table-layout: auto;
  border-spacing: 0;
`

export const Tbody = styled.tbody``
export const Tr = styled.tr`
  border-bottom: 1px solid white;
`

export const Td = styled.td<{
  $bottomLine?: boolean
}>`
  padding: 8px 4px;
  color: ${({ theme }) => theme.colors.white};
  text-size: 18px;
  ${({ $bottomLine }) => $bottomLine && css`
    border-bottom: 1px solid white;
  `}
`
