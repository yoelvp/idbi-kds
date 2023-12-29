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

// Selected tags
export const SelectTagsWrapper = styled.div`
  width:100%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;

  &:focus {
    border-color: ${({ theme }) => theme.colors['blue-600']};
  }
`

export const SelectTagsList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  justify-content: start;
  align-items: center;
  gap: 4px;
  `

export const SelectTagsItem = styled.li`
  background-color: #f1f2f1;
  border-radius: 4px;
  padding: 1px 4px;
  color: ${({ theme }) => theme.colors['blue-600']};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  `

export const SelectTagsItemButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SelectTagsInput = styled.input`
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 6px 12px;
  flex: 1 1 80px;
`
