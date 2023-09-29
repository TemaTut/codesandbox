import React from "react";
import { useTimer } from "../../utils/timer"; // Импорт функции из timer.js
import "./PopUp.css";

export default function PopUp({ isOpen, onClose, onConfirm }) {
  const { countdown, isConfirmButtonEnabled } = useTimer(5, onConfirm);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "show" : ""}`}>
      {isOpen && (
        <div className="modal-content">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <h2>Согласие с правилами</h2>
          <p>
            Для данной функции применяются особые условия и правила пользования,
            их необходимо подтвердить, нажав на кнопку{" "}
            {countdown > 0 ? `Подтвердить (${countdown})` : "Подтвердить"}
          </p>
          <button onClick={onConfirm} disabled={!isConfirmButtonEnabled}>
            Подтвердить
          </button>
          <button onClick={handleClose}>Отмена</button>
        </div>
      )}
    </div>
  );
}
