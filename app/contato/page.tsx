"use client";
import { useState } from "react";
import { Button } from "../../components/atoms/Button";
import { Input } from "../../components/atoms/Input";

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", form);
    setEnviado(true);
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-[var(--foreground)]">
        Fale Conosco
      </h1>

      {enviado ? (
        <p className="text-green-500 text-center mb-6">
          Mensagem enviada com sucesso! 💌
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-[#111] text-[var(--foreground)] p-6 rounded-lg shadow-lg border border-gray-700"
        >
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-[var(--foreground)]"
            >
              Nome
            </label>
            <Input
              type="text"
              id="nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--foreground)]"
            >
              E-mail
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
            <label
              htmlFor="mensagem"
              className="block text-sm font-medium text-[var(--foreground)]"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              value={form.mensagem}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>
          </div>

          <Button
            type="submit"
            className="w-full bg-red-600 text-white font-medium py-2 rounded hover:bg-red-700 transition"
          >
            Enviar
          </Button>
        </form>
      )}
    </section>
  );
}