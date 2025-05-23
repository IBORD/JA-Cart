"use client";
import { Produto } from "../../types/product";
import { CardProduto } from "../molecules/CardProduct";

interface ListProductProps {
  produtos: Produto[];
  onProductClick: (produto: Produto) => void;
}

export const ListProduct = ({ produtos, onProductClick }: ListProductProps) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {produtos.map((produto) => (
        <CardProduto
          key={produto.id}
          produto={produto}
          onCardClick={onProductClick}
        />
      ))}
    </section>
  );
};
