import React from "react";
import { render } from "@testing-library/react";
import PopUp from "./PopUp";

test("проверяет, что кнопка 'Подтвердить' отображается", () => {
  const { getByText } = render(
    <PopUp isOpen={true} onClose={() => {}} onConfirm={() => {}} />
  );

  // Проверяем, что кнопка 'Подтвердить' отображается
  expect(getByText("Подтвердить")).toBeInTheDocument();
});
