import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 8px 16px;
  appearance: textfield;
  -moz-appearance: textfield;

  &:focus {
    outline: ${({ theme }) => theme.colors['blue-400']} ridge 2px;
    border-color: ${({ theme }) => theme.colors['blue-600']};
  }
`
