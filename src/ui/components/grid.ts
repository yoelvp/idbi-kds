import styled from 'styled-components'

export const Grid = styled.div<{
  $gap?: string
}>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '8px')};

  @media screen and (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 970px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
