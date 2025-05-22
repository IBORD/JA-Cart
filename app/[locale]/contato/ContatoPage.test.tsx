import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContatoPage from "./page";

describe("ContatoPage", () => {
  it("renderiza o formulário com todos os campos", () => {
    render(<ContatoPage />);
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/concordo com os termos/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument();
  });

  it("mostra mensagens de erro se os campos estiverem vazios", async () => {
    render(<ContatoPage />);
    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/o nome deve ter pelo menos 3 caracteres/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/por favor, insira um email válido/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/a mensagem deve ter pelo menos 10 caracteres/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/você deve concordar com os termos/i)
      ).toBeInTheDocument();
    });
  });

  it("envia o formulário com dados válidos", async () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<ContatoPage />);

    fireEvent.input(screen.getByLabelText(/nome/i), {
      target: { value: "Jose alves" },
    });
    fireEvent.input(screen.getByLabelText(/e-mail/i), {
      target: { value: "jose@email.com" },
    });
    fireEvent.input(screen.getByLabelText(/mensagem/i), {
      target: { value: "Gostaria de mais informações sobre os produtos." },
    });
    fireEvent.click(screen.getByLabelText(/concordo com os termos/i));

    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    await waitFor(() => {
      expect(logSpy).toHaveBeenCalledWith("Dados enviados:", {
        nome: "Jose alves",
        email: "jose@email.com",
        mensagem: "Gostaria de mais informações sobre os produtos.",
        consentimento: true,
      });

      expect(
        screen.getByText(/mensagem enviada com sucesso/i)
      ).toBeInTheDocument();
    });

    logSpy.mockRestore();
  });
});
