import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ReactModalDemo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "grey" },
          content: { color: "orange", backgroundColor: "green" },
        }}
      >
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default ReactModalDemo;
