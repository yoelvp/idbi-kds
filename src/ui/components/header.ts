import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 4rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue[800]};
`
