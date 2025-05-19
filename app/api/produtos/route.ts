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
    imagem: "/img/tenis.jpg",
  },
  {
    id: "2",
    nome: "Camiseta Básica",
    descricao: "Algodão 100%",
    categoria: "Roupas",
    preco: 49.9,
    validade: null,
    imagem: "/img/camiseta.jpg",
  },
  {
    id: "3",
    nome: "Mochila Escolar",
    descricao: "Espaçosa e resistente",
    categoria: "Acessórios",
    preco: 120.0,
    validade: null,
    imagem: "/img/mochila.jpg",
  },
  {
    id: "4",
    nome: "Calça Jeans Slim",
    descricao: "Corte justo e moderno",
    categoria: "Roupas",
    preco: 159.9,
    validade: null,
    imagem: "/img/calca-jeans.jpg",
  },
  {
    id: "5",
    nome: "Blazer Social",
    descricao: "Elegante para ocasiões formais",
    categoria: "Roupas",
    preco: 349.9,
    validade: null,
    imagem: "/img/blazer.jpg",
  },
  {
    id: "6",
    nome: "Vestido Floral",
    descricao: "Leve e confortável para o verão",
    categoria: "Roupas",
    preco: 129.9,
    validade: null,
    imagem: "/img/vestido-floral.jpg",
  },
  {
    id: "7",
    nome: "Jaqueta de Couro",
    descricao: "Estilo casual e atemporal",
    categoria: "Roupas",
    preco: 499.9,
    validade: null,
    imagem: "/img/jaqueta-couro.jpg",
  },
  {
    id: "8",
    nome: "Camisa Social",
    descricao: "Perfeita para o ambiente de trabalho",
    categoria: "Roupas",
    preco: 189.9,
    validade: null,
    imagem: "/img/camisa-social.jpg",
  },
  {
    id: "9",
    nome: "Shorts Esportivo",
    descricao: "Tecido respirável para atividades físicas",
    categoria: "Roupas",
    preco: 79.9,
    validade: null,
    imagem: "/img/shorts-esportivo.jpg",
  },
  {
    id: "10",
    nome: "Suéter Tricot",
    descricao: "Aquecedor para os dias frios",
    categoria: "Roupas",
    preco: 139.9,
    validade: null,
    imagem: "/img/sueter.jpg",
  },
];

export async function GET() {
  return NextResponse.json(produtos);
}