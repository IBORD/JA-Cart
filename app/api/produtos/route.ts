import { NextResponse } from "next/server";
import { Produto } from "../../../types/product";

const produtos: Produto[] = [
  {
    id: "1",
    nome: "Tênis Esportivo",
    descricao: "Confortável e moderno",
    categoria: "Calçados",
    preco: 299.9,
    validade: null,
    imagem: "/images/tenis.jpg",
  },
  {
    id: "2",
    nome: "Camiseta Básica",
    descricao: "Algodão 100%",
    categoria: "Roupas",
    preco: 49.9,
    validade: null,
    imagem: "/images/camiseta.jpg",
  },
  {
    id: "3",
    nome: "Mochila Escolar",
    descricao: "Espaçosa e resistente",
    categoria: "Acessórios",
    preco: 120.0,
    validade: null,
    imagem: "/images/mochila.jpg",
  },
];

export async function GET() {
  return NextResponse.json(produtos);
}