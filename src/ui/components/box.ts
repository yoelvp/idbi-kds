import type { AlignItems, JustifyContent } from '@/ui/types/flex'

import styled from 'styled-components'

export const Box = styled.section`
  padding: 4px;
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
