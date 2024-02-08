import { render } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  it("should render root", () => {
    const sut = render(
      <Button.Root />
    );

    expect(sut.getByTestId("button-root")).toBeInTheDocument();
  });

  it("should render box", () => {
    const sut = render(
      <Button.Box />
    );

    expect(sut.getByTestId("button-box")).toBeInTheDocument();
  });
});