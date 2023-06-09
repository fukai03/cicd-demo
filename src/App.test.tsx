import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("props is avaliable", () => {
  const value = "123";
  // 为了多写点测试用例，我给App组件加了个prop
  render(<App value={value} />);
  expect(screen.getByRole("props")).toHaveTextContent(value);
});

test("click of button is avaliable", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("button")).toHaveTextContent(`count is 1`);
});