import styled from 'styled-components'

export const Card = styled.article`
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.blue[800]};
`

export const CardHeader = styled.header`
  position: relative;
  padding: 12px 8px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.yellow[200]};
`

export const CardBody = styled.div`
  padding: 1rem 8px;
`

export const CardFooter = styled.footer`
  padding: 4px 8px;
`

export const CardTime = styled.time`
  width: 4rem;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.yellow[200]};
  color: ${({ theme }) => theme.colors.blue[800]};
  text-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardButtonClose = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.blue[800]};
  background-color: ${({ theme }) => theme.colors.yellow[200]};
  border: none;
  border-radius: 8px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 300ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow[300]};
  }
`
