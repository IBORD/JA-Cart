import { Produto } from "../types/product";

export async function fetchProdutos(): Promise<Produto[]> {
  try {
    const response = await fetch("/api/produtos");
    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }
    return response.json();
  } catch (error) {
    console.error("Erro na API:", error);
    return [];
  }
}