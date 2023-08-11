import React from "react";
import useModal from "../../hooks/useModal";

const About: React.FC = () => {
  const { JuicyModal, closeModal, openModal } = useModal({
    rootId: "modal-root",
  });

  return (
    <div className="About">
      <div>About</div>
      <button onClick={openModal}>Open Modal</button>
      <JuicyModal
        title="Title"
        content="Modal from About"
        buttons={[
          {
            label: "Confirm",
            onClick: () => {
              closeModal();
              alert("confirm");
            },
          },
          {
            label: "Close",
            onClick: closeModal,
          },
        ]}
      />
    </div>
  );
};

export default About;
