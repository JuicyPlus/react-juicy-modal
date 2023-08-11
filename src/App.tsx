import React from "react";
import "./App.css";
import useModal from "./hooks/useModal";

function App() {
  const { JuicyModal, closeModal, openModal } = useModal({
    rootId: "modal-root",
  });

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            console.log("open");
            openModal();
          }}
        >
          Open Modal
        </button>
      </header>
      <JuicyModal
        title="Title"
        content="content"
        buttons={[
          {
            label: "Confirm",
            onClick: () => console.log("Confirm"),
          },
          {
            label: "Close",
            onClick: () => closeModal(),
          },
        ]}
      />
    </div>
  );
}

export default App;
