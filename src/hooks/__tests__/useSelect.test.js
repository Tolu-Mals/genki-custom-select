import { renderHook } from "@testing-library/react";
import { useSelect } from "../use-select";

const options = {
    placeholder: "select",
    listBoxStyle: true,
    hasTypeahead: true,
    onChange: () => {},
    options: <></>,
    selectedOption: "Select",
    readOnly: false,
    required: false,
    size: "sm",
    variant: "outlined",
    hideLabel: true,
    icon: <></>,
    name: "select-test",
    buttonStyle: {},
    isDisabled: false,
    label: "Select",
    errorBorderColor : "green",
    focusBorderColor: "green",
    fullWidth: false
}

describe("useSelect tests", () => {
    it("verifies it renders getButtonProps and getListBoxProps", () => {
        const { result, rerender } = renderHook(
            (options) => useSelect(options),
            {
                ...options,
                variant: "outlined",
                hasTypeahead: true
            }
        )

        const { getButtonProps, getListBoxProps } = result.current
        expect(getButtonProps).toMatchObject({variant: "outlined"})
        expect(getListBoxProps).toBeDefined({hasTypeahead: true})
        rerender( {
            ...options,
            variant: "filled",
            hasTypeahead: false
        })
        expect(result.current.getButtonProps).toMatchObject({variant: "filled"})
        expect(result.current.getListBoxProps).toMatchObject({hasTypeahead: false})
    })
})