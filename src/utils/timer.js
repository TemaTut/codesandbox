import { useState } from "react";

export function useTimer(initialCountdown, onFinish) {
  const [countdown, setCountdown] = useState(initialCountdown);
  const [isConfirmButtonEnabled, setIsConfirmButtonEnabled] = useState(false);

  const startTimer = () => {
    setIsConfirmButtonEnabled(false);
    setCountdown(initialCountdown);

    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 1) {
          clearInterval(countdownInterval);
          setIsConfirmButtonEnabled(true);
          onFinish(); // Вызывает функцию onFinish при завершении таймера
        }
        return prevCount - 1;
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
    }, initialCountdown * 1000);
  };

  return { countdown, isConfirmButtonEnabled, startTimer };
}
