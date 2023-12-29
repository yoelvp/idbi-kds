import type { Color } from '@/ui/types/Color'
import { Link as LinkRoute } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '@/ui/theme/colors'

export const Link = styled(LinkRoute)<{
  $color?: Color
  $bg?: Color
}>`
  color: ${({ $color }) => colors[$color ?? 'white']};
  text-decoration: none;
  font-size: 16px;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${({ $bg }) => colors[$bg ?? 'blue-600']};

  &:hover {
    text-decoration: underline;
  }
`
