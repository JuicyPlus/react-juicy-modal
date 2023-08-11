import React from "react";
import { createPortal } from "react-dom";
import Modal from "../components/Modal";

const useModal = ({ rootId }: { rootId: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // TODO : Modal Root 부분을 임의로 지정할 수 있도록 함.
  // const ModalRoot = () => {
  //   return <div id={rootId} className="render-here"></div>;
  // };

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
    // TODO: modal Root의 위치를 따로 지정하는 방법 제공
    // modalRoot = document.getElementById(rootId);
    const modalRoot = document.body;

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
    //ModalRoot,
  };
};

export default useModal;
