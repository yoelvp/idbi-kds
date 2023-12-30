import type { Color } from '@/ui/types/Color'

import { colors } from '@/ui/theme/colors'

import styled, { css } from 'styled-components'

export const Button = styled.button<{
  $color?: Color
  $bg?: Color
  $marginTop?: string
  $display?: string
  $justifyContent?: string
  $AlignItems?: string
  $gap?: string
  $rounded?: string
}>`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ $bg }) => colors[$bg ?? 'black']};
  color: ${({ $color }) => colors[$color ?? 'black']};
  cursor: pointer;
  white-space: nowrap;
  ${({ $marginTop }) => css`
    margin-top: ${$marginTop}px;
  `};
  ${({ $display }) => css`
    display: ${$display};
  `}
  ${({ $justifyContent }) => css`
    justify-content: ${$justifyContent};
  `}
  ${({ $AlignItems }) => css`
    align-items: ${$AlignItems};
  `}
  ${({ $gap }) => css`
    gap: ${$gap}px;
  `}
  ${({ $rounded }) => css`
    border-radius: ${$rounded}px;
  `}

  &:hover {
    background-color: ${({ $bg }) => `${colors[$bg ?? 'black']}ca`};
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
