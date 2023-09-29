import React, { useState } from "react";
import "./styles.css";
import PopUp from "./components/PopUp/PopUp";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [actionConfirmed, setActionConfirmed] = useState(false);

  const openModal = () => {
    if (!actionConfirmed) {
      setModalVisible(true);
    } else {
      alert("Действие выполнено");
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const confirmAction = () => {
    closeModal();
    setActionConfirmed(true);
    alert("Действие выполнено");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={openModal}>Выполнить действие</button>
      <PopUp
        isOpen={modalVisible}
        onClose={closeModal}
        onConfirm={confirmAction}
        actionConfirmed={actionConfirmed}
      />
    </div>
  );
}
