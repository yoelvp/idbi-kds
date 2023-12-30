import styled from 'styled-components'

export const Card = styled.article`
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors['blue-800']};
  display: flex;
  flex-direction: column;
`

export const CardHeader = styled.header`
  padding: 12px 8px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors['blue-900']};
`

export const CardBody = styled.div`
  padding: 1rem 8px;
  flex-grow: 1;
`

export const CardFooter = styled.footer`
  padding: 16px;
  align-self: flex-end;
`

export const CardTime = styled.time`
  width: 4rem;
  background-color: ${({ theme }) => theme.colors['yellow-200']};
  color: ${({ theme }) => theme.colors['blue-800']};
  border-radius: 8px;
  padding: 4px;
  font-size: 18px;
  font-weight: bold;
`

export const CardButtonClose = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors['blue-800']};
  background-color: ${({ theme }) => theme.colors['yellow-200']};
  border: none;
  border-radius: 8px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 300ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-300']};
  }
`
