import {
  Modal as ModalStyled,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBody
} from '@/ui'
import { ButtonAction } from '@/ui/components/button'
import type { FC, ReactNode } from 'react'
import { IoMdClose } from 'react-icons/io'

interface Props {
  children: ReactNode
  title: string
  onClose: () => void
}

const Modal: FC<Props> = ({ children, title, onClose }) => {
  return (
    <ModalContainer>
      <ModalStyled>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>

          <ButtonAction onClick={onClose}>
            <IoMdClose size="18" />
          </ButtonAction>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalStyled>
    </ModalContainer>
  )
}

export default Modal
