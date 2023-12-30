import type { Color } from '../types/Color'
import { colors } from '../theme/colors'
import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
`

export const ListItem = styled.li<{
  $color?: Color
  $bg?: Color
  $rounded?: string
  $padding?: string
  $paddingX?: string
  $paddingY?: string
}>`
  list-style: none;
  list-style-position: inside;
  background-color: ${({ $bg }) => colors[$bg ?? 'transparent']};
  color: ${({ $color }) => colors[$color ?? 'white']};
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
