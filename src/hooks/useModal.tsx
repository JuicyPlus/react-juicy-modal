import React from "react";
import { createPortal } from "react-dom";
import Modal from "../components/Modal";

type UseModalProps = {
  /** Modal의 실제 Render가 이루어지는 ModalRoot의 element id */
  rootId: string;
};

const useModal = ({ rootId }: UseModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  /** Modal이 실제로 Render 되는 위치를 지정하기 위한 컴포넌트 */
  const ModalRoot = () => {
    return <div id={rootId} className="render-here"></div>;
  };

  /** Modal을 선언하는 부분 */
  const JuicyModal = ({
    buttons,
    title,
    content,
  }: {
    buttons: Array<{
      label: string;
      onClick: () => void;
    }>;
    title: string;
    content: string;
  }) => {
    const modalRoot = document.getElementById(rootId);

    if (!modalRoot) {
      console.log("no modal root");
      return null;
    }
    if (!isOpen) return null;

    const RenderModal = (
      <Modal
        title={title}
        content={content}
        buttons={buttons}
        onClose={closeModal}
      />
    );

    return createPortal(RenderModal, modalRoot);
  };

  return {
    openModal,
    closeModal,
    JuicyModal,
    ModalRoot,
  };
};

export default useModal;
