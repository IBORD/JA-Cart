import { FC } from "react";
import { Produto } from "../../types/product";
import { Button } from "../atoms/Button";

interface Props {
  produto: Produto;
}

export const CardProduto: FC<Props> = ({ produto }) => {
  return (
    <div className="bg-zinc-900 text-[var(--foreground)] rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300">
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-1">{produto.nome}</h2>
      <p className="text-gray-400 mb-4">R$ {produto.preco.toFixed(2)}</p>
      <Button variant="primary">Adicionar ao carrinho</Button>
    </div>
  );
};