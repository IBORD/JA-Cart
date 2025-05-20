import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../organisms/NavBar"
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("deve renderizar o logo corretamente", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("Logo da Minha Loja");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/img/Bg-gray.jpg");
  });

  it("deve renderizar os links de navegação", () => {
    render(<Navbar />);
    expect(screen.getByText("Produtos")).toBeInTheDocument();
    expect(screen.getByText("Galeria")).toBeInTheDocument();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  describe("Navbar navegação", () => {
  it("links têm os href corretos e respondem a clique", () => {
    render(<Navbar />);

    const produtosLink = screen.getByText("Produtos");
    expect(produtosLink.closest("a")).toHaveAttribute("href", "/produtos");

    const galeriaLink = screen.getByText("Galeria");
    expect(galeriaLink.closest("a")).toHaveAttribute("href", "/galeria");

    // Simula clique (não faz navegação, só garante que botão/link pode ser clicado)
    fireEvent.click(produtosLink);
    fireEvent.click(galeriaLink);

    // Se quiser, você pode checar se a função onClick foi chamada,
    // mas aqui não temos onClick customizado, o comportamento é do Next.js
  });
});
});
