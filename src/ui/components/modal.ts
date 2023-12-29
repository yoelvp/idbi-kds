import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => `${theme.colors.black}54`};
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
`

export const Modal = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  width: 60%;
  height: auto;
  border-radius: 8px;
  overflow: hidden;
  margin: auto;
`

export const ModalHeader = styled.header`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 8px 1rem;
`

export const ModalTitle = styled.h4`
  color: ${({ theme }) => theme.colors['blue-800']};
  font-size: 1.05rem;
`

export const ModalBody = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
`
