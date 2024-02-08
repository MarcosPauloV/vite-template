import { render } from "@testing-library/react";
import TextField from "./text-field";

describe("TextField", () => {
  it("should render root", () => {
    const sut = render(
      <TextField.Root />
    );

    expect(sut.getByTestId("text-field-root")).toBeInTheDocument();
  });

  it("should render input", () => {
    const sut = render(
      <TextField.Input />
    );

    expect(sut.getByTestId("text-field-input")).toBeInTheDocument();
  });

  it("should render label", () => {
    const sut = render(
      <TextField.Label />
    );

    expect(sut.getByTestId("text-field-label")).toBeInTheDocument();
  });
});