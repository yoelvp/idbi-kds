import type { AlignItems, JustifyContent } from '@/ui/types/flex'
import type { Color } from '@/ui/types/Color'

import styled, { css } from 'styled-components'
import { colors } from '@/ui/theme/colors'

export const Box = styled.section<{
  $display?: string
  $justifyContent?: string
  $AlignItems?: string
  $gap?: string
  $color?: Color
  $bg?: Color
  $rounded?: string
}>`
  width: 100%;
  padding: 4px;
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
  color: ${({ $color }) => colors[$color ?? 'white']};
  background-color: ${({ $bg }) => colors[$bg ?? 'transparent']};
`

export const Flex = styled.div<{
  $flexDirection?: 'column' | 'row'
  $justifyContent?: JustifyContent
  $alignItems?: AlignItems
  $gap?: string
}>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection ?? 'row'};
  align-items: ${({ $alignItems }) => $alignItems ?? 'start'};
  justify-content: ${({ $justifyContent }) => $justifyContent ?? 'start'};
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '8px')};
`
