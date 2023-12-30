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
  $width?: string
  $padding?: string
  $textAlign?: string
}>`
  width: 100%;
  padding: 4px;
  white-space: nowrap;
  color: ${({ $color }) => colors[$color ?? 'white']};
  background-color: ${({ $bg }) => colors[$bg ?? 'transparent']};
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
  ${({ $width }) => css`
    width: ${$width};
  `}
  ${({ $padding }) => css`
    padding: ${$padding}px;
  `}
  ${({ $textAlign }) => css`
    text-align: ${$textAlign};
  `}
`

export const Flex = styled.div<{
  $flexDirection?: 'column' | 'row'
  $justifyContent?: JustifyContent
  $alignItems?: AlignItems
  $gap?: string
  $width?: string
  $rounded?: string
  $padding?: string
  $paddingX?: string
  $paddingY?: string
}>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection ?? 'row'};
  align-items: ${({ $alignItems }) => $alignItems ?? 'start'};
  justify-content: ${({ $justifyContent }) => $justifyContent ?? 'start'};
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '8px')};
  ${({ $width }) => css`
    width: ${$width};
  `}
  ${({ $rounded }) => css`
    border-radius: ${$rounded}px;
  `}
  ${({ $padding }) => css`
    padding: ${$padding}px;
  `}
  ${({ $paddingX }) => css`
    padding-left: ${$paddingX}px;
    padding-right: ${$paddingX}px;
  `}
  ${({ $paddingY }) => css`
    padding-top: ${$paddingY}px;
    padding-bottom: ${$paddingY}px;
  `}
`
