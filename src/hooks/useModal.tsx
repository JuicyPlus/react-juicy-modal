import React from 'react'
import { createPortal } from 'react-dom'
import Modal from '../components/Modal'
import type { ModalProps } from '../components/Modal'

interface UseModalProps {
  /** Modal의 실제 Render가 이루어지는 ModalRoot의 element id */
  rootId: string
}
interface UseModalReturn {
  openModal: () => void
  closeModal: () => void
  JuicyModal: React.FC<ModalProps>
  ModalRoot: React.FC
}

const useModal = ({ rootId }: UseModalProps): UseModalReturn => {
  const [isOpen, setIsOpen] = React.useState(false)

  const openModal: () => void = () => {
    setIsOpen(true)
  }
  const closeModal: () => void = () => {
    setIsOpen(false)
  }

  /** Modal이 실제로 Render 되는 위치를 지정하기 위한 컴포넌트 */
  const ModalRoot: React.FC = () => {
    return <div id={rootId} className="render-here"></div>
  }

  /** Modal을 선언하는 부분 */
  const JuicyModal: React.FC<ModalProps> = ({
    buttons,
    title,
    content,
    onClose
  }) => {
    const modalRoot = document.getElementById(rootId)

    if (modalRoot == null) {
      console.log('no modal root')
      return null
    }
    if (!isOpen) return null

    const RenderModal = (
      <Modal
        title={title}
        content={content}
        buttons={buttons}
        onClose={onClose ?? closeModal}
      />
    )

    return createPortal(RenderModal, modalRoot)
  }

  return {
    openModal,
    closeModal,
    JuicyModal,
    ModalRoot
  }
}

export default useModal
