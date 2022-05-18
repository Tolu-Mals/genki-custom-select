import { render, screen, fireEvent } from "@testing-library/react";
import { Select, Option } from "../index";

describe("keyboard navigation", async () => {

  it("Should move down the list if the ArrowDownKey is Pressed", async () => {
    render(
      <Select>
        <Option value="1">one</Option>
        <Option value="2">two</Option>
        <Option value="6">six</Option>
        <Option value="8">eight</Option>
      </Select>
    );
    const optionElements = screen.queryAllByTestId("select-option");
    fireEvent.focus(optionElements[0]);
    fireEvent.keyDown(optionElements[0], { key: "ArrowDown", code: 40 });
    expect(optionElements[1]).toHaveClass("current");
  });

  it("Should move up the list if the ArrowUpKey is Pressed", async () => {
    render(
      <Select>
        <Option value="1">one</Option>
        <Option value="2">two</Option>
        <Option value="6">six</Option>
        <Option value="8">eight</Option>
      </Select>
    );
    const optionElements = screen.queryAllByTestId("select-option");
    fireEvent.focus(optionElements[2]);
    fireEvent.keyDown(optionElements[2], { key: "ArrowUp", code: 38 });
    expect(optionElements[1]).toHaveClass("current");
  });
});
