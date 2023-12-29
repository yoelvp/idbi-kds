import type { Color } from '@/ui/types/Color'

import { colors } from '@/ui/theme/colors'

import styled, { css } from 'styled-components'

export const Button = styled.button<{
  $color?: Color
  $bg?: Color
  $marginTop?: string
}>`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ $bg }) => colors[$bg ?? 'black']};
  color: ${({ $color }) => colors[$color ?? 'black']};
  cursor: pointer;
  ${({ $marginTop }) => css`
    margin-top: ${$marginTop}px;
  `};

  &:hover {
    background-color: ${({ $bg }) => `${colors[$bg ?? 'black']}50`};
  }

  &:disabled {
    background-color: #ccc;
    color: ${({ theme }) => theme.colors.black};
    cursor: default;
  }
`

export const ButtonAction = styled.button<{
  $color?: Color
  $bg?: Color
}>`
  padding: 8px 8px;
  border: none;
  border-radius: 8px;
  background-color: ${({ $bg }) => colors[$bg ?? 'black']};
  color: ${({ $color }) => colors[$color ?? 'black']};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 85%;
  }
`
