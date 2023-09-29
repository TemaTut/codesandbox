import { renderHook, act } from "@testing-library/react-hooks";
import { useTimer } from "./timer";

test("useTimer hook works correctly", () => {
  const onFinish = jest.fn();

  const { result } = renderHook(() => useTimer(5, onFinish));

  expect(result.current.countdown).toBe(5);
  expect(result.current.isConfirmButtonEnabled).toBe(false);

  act(() => {
    result.current.startTimer();
  });

  expect(result.current.countdown).toBe(5);
  expect(result.current.isConfirmButtonEnabled).toBe(false);

  return new Promise((resolve) => {
    setTimeout(() => {
      expect(result.current.countdown).toBe(0);
      expect(result.current.isConfirmButtonEnabled).toBe(true);
      resolve();
    }, 5000);
  });
});
