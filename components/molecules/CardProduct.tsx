import { FC } from "react";
import { Produto } from "../../types/product";
import { Button } from "../atoms/Button";

interface Props {
  produto: Produto;
}

export const CardProduto: FC<Props> = ({ produto }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="w-full h-48 object-cover mb-2"
      />
      <h2 className="text-lg font-bold mb-1">{produto.nome}</h2>
      <p className="text-gray-600 mb-2">R$ {produto.preco.toFixed(2)}</p>
      <Button variant="primary">Adicionar ao carrinho</Button>
    </div>
  );
};