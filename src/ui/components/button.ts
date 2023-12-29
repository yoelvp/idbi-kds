import type { Color } from '@/ui/types/Color'

import { colors } from '@/ui/theme/colors'

import styled from 'styled-components'

export const Button = styled.button<{
  $color?: Color
  $bg?: Color
}>`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${({ $bg }) => {
    if ($bg) {
      const [color, shade] = $bg.split('.')
      return colors[color]?.[shade]
    }
    return colors.yellow[200]
  }};
  color: ${({ $color }) => {
    if ($color) {
      const [color, shade] = $color.split('.')
      return colors[color]?.[shade]
    }
    return colors.black
  }};
  cursor: pointer;

  &:hover {
    background-color: ${({ $bg }) => {
      if ($bg) {
        const [color, shade] = $bg.split('.')
        return colors[color]?.[shade]
      }
      return colors.yellow[200]
    }};
  }
`

export const ButtonAction = styled.button<{
  $color?: Color
  $bg?: Color
}>`
  padding: 8px 8px;
  border: none;
  border-radius: 8px;
  background-color: ${({ $bg }) => {
    if ($bg) {
      const [color, shade] = $bg.split('.')
      return colors[color]?.[shade]
    }
    return colors.yellow[200]
  }};
  color: ${({ $color }) => {
    if ($color) {
      const [color, shade] = $color.split('.')
      return colors[color]?.[shade]
    }
    return colors.white
  }};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 85%;
  }
`
