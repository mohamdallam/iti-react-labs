import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "./Counter";

test("Counter value", () => {
  render(<Counter />);
  const counterNumber = screen.getByText("10");
  expect(counterNumber).toBeInTheDocument();
});

test("should render increment button", () => {
  render(<Counter />);
  const IncrementButton = screen.getByRole("button", { name: /Increment/i });
  expect(IncrementButton).toBeInTheDocument();
});

test("when click decrement counter value should be increment", () => {
  render(<Counter />);
  const counterNumber = screen.getByText("10");
  expect(counterNumber).toBeInTheDocument();
  expect(counterNumber).toHaveTextContent("10");
  const IncrementButton = screen.getByRole("button", { name: /Increment/i });
  fireEvent.click(IncrementButton);
  expect(counterNumber).toHaveTextContent("11");
});

test("should render decrement button", () => {
  render(<Counter />);
  const decrementButton = screen.getByRole("button", { name: /Decrement/i });
  expect(decrementButton).toBeInTheDocument();
});

test("when click decrement counter value should be decrement", () => {
  render(<Counter />);
  const counterNumber = screen.getByText("10");
  expect(counterNumber).toBeInTheDocument();
  expect(counterNumber).toHaveTextContent("10");
  const decrementButton = screen.getByRole("button", { name: /Decrement/i });
  fireEvent.click(decrementButton);
  expect(counterNumber).toHaveTextContent("9");
});
