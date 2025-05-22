// components/molecules/CardProduct.tsx
import { FC } from "react";
import { Produto } from "../../types/product";
import { Button } from "../atoms/Button";
import { useTranslations } from "next-intl";

interface Props {
  produto: Produto;
}

export const CardProduto: FC<Props> = ({ produto }) => {
  const t = useTranslations("produtos"); // Usar o namespace "produtos"

  return (
    <div className="bg-zinc-900 text-[var(--foreground)] rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300">
      <img
        src={produto.imagem}
        // Usar o nome traduzido como alt text
        alt={t(`productName_${produto.id}`)} 
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      {/* Usar o nome traduzido */}
      <h2 className="text-xl font-semibold mb-1">{t(`productName_${produto.id}`)}</h2>
      
      {/* Adicionar a descrição traduzida, se desejar exibi-la */}
      <p className="text-sm text-gray-300 mb-2">{t(`productDescription_${produto.id}`)}</p>
      
      <p className="text-gray-400 mb-4">
        {t("currencySymbol")} {produto.preco.toFixed(2)}
      </p>
      <Button variant="primary">{t("addToCartButton")}</Button>
    </div>
  );
};