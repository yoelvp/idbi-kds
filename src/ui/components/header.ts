import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 4rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['blue-800']};
`

export const HeaderClock = styled.time`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  font-weight: bold;
`
