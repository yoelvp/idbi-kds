import { colors } from '../theme/colors'
import type { Color } from '../types/Color'

import styled, { css } from 'styled-components'

export const Text = styled.p<{
  $fontSize?: string
  $color?: Color
  $bg?: Color
  $padding?: string
  $paddingX?: string
  $paddingY?: string
}>`
font-size: ${({ $fontSize }) => `${$fontSize}px` ?? '16px'};
  ${({ $color }) => css`
    color: ${colors[$color ?? 'black']};
  `}
  ${({ $bg }) => css`
    background-color: ${colors[$bg ?? 'transparent']};
  `}
  ${({ $padding }) => css`
    padding: ${$padding}px;
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
