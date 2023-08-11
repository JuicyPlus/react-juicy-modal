import React from "react";
import useModal from "../../hooks/useModal";

const Home: React.FC = () => {
  const { JuicyModal, closeModal, openModal } = useModal({
    rootId: "modal-root",
  });

  return (
    <div className="Home">
      <div>Home</div>
      <button onClick={openModal}>Open Modal</button>
      <JuicyModal
        title="Title"
        content="Modal from Home"
        buttons={[
          {
            label: "Close",
            onClick: closeModal,
          },
        ]}
      />
    </div>
  );
};

export default Home;
