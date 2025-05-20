import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  it("atualiza o valor do input ao digitar e chama onSearch ao clicar no botão", () => {
    const onSearchMock = jest.fn();

    render(<SearchBar onSearch={onSearchMock} />);

    const input = screen.getByPlaceholderText(
      "Buscar produtos..."
    ) as HTMLInputElement;
    const button = screen.getByRole("button", { name: /buscar/i });

    fireEvent.change(input, { target: { value: "sapato" } });
    expect(input.value).toBe("sapato");

    fireEvent.click(button);
    expect(onSearchMock).toHaveBeenCalledWith("sapato");

    fireEvent.change(input, { target: { value: "camisa" } });
    fireEvent.click(button);
    expect(onSearchMock).toHaveBeenCalledWith("camisa");

    expect(onSearchMock).toHaveBeenCalledTimes(2);
  });
});
