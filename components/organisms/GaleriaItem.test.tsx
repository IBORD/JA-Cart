import { fireEvent, render, screen } from "@testing-library/react";
import { GaleriaItem } from "./GaleriaItem";
import { GaleriaProvider } from "../../contexts/GaleriaContext";

const midia = {
  id: 1,
  tipo: "imagem",
  url: "/img/modelo_feminina.jpg",
  titulo: "Look feminino",
} as const;

describe("GaleriaItem", () => {
  it("deve renderizar imagem com atributos corretos", () => {
    render(
      <GaleriaProvider>
        <GaleriaItem midia={{ ...midia }} />
      </GaleriaProvider>
    );

    const img = screen.getByAltText("Look feminino") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(midia.url);
  });

  it("deve alternar o favorito ao clicar no botão", () => {
    render(
      <GaleriaProvider>
        <GaleriaItem midia={{ ...midia }} />
      </GaleriaProvider>
    );

    const card = screen.getByText(midia.titulo).closest("div");
    expect(card).toBeInTheDocument();

    const botaoFavoritar = card?.querySelector(
      'button[aria-label="Favoritar"]'
    );
    expect(botaoFavoritar).toBeInTheDocument();

    if (!botaoFavoritar) return;

    // Verifica o estado inicial do ícone
    let icone = botaoFavoritar.querySelector("svg");
    expect(icone).toBeInTheDocument();
    expect(icone).toHaveClass("text-gray-400");

    // Clica para favoritar
    fireEvent.click(botaoFavoritar);

    // Após o clique, pega novamente o ícone atualizado
    icone = botaoFavoritar.querySelector("svg");
    expect(icone).toHaveClass("text-red-500");

    // Clica para desfavoritar
    fireEvent.click(botaoFavoritar);

    // Pega o ícone atualizado após desfavoritar
    icone = botaoFavoritar.querySelector("svg");
    expect(icone).toHaveClass("text-gray-400");
  });
});
