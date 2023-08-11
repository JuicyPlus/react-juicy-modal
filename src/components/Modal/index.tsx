import React from "react";

export type ButtonData = {
  label: string;
  onClick: () => void;
};

export type ModalProps = {
  buttons: Array<ButtonData>;
  title: string;
  content: string;
  onClose: () => void;
};

const Modal = ({ buttons, title, content, onClose }: ModalProps) => {
  return (
    <div
      style={{
        // center of the screen
        position: "absolute",
        padding: "20px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(255,255,255,0.8)",
      }}
      className="modal"
    >
      <div className="modal-content">
        <div className="modal-header">
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              padding: "10px",
              cursor: "pointer",
            }}
            className="close"
            onClick={onClose}
          >
            &times;
          </div>
          <h2>{title}</h2>
        </div>
        <div
          style={{
            padding: "10px",
            height: "50px",
            overflowY: "auto",
          }}
          className="modal-body"
        >
          {content}
        </div>
        <div className="modal-footer">
          {buttons.map(({ label, onClick }) => (
            <button
              style={{
                padding: "10px",
                margin: "10px",
                cursor: "pointer",
              }}
              key={label}
              onClick={onClick}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
