import { FC } from "react";
import { Produto } from "../../types/product";
import { Button } from "../atoms/Button";
import { useTranslations } from "next-intl";

export interface CardProdutoProps {
  produto: Produto;
  onCardClick: (produto: Produto) => void;
}

export const CardProduto: FC<CardProdutoProps> = ({ produto, onCardClick }) => {
  const t = useTranslations("produtos");

  const handleImageOrTitleClick = () => {
    onCardClick(produto);
  };

  return (
    <div className="bg-zinc-900 text-[var(--foreground)] rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between">
      <div>
        <div onClick={handleImageOrTitleClick} className="cursor-pointer">
          <img
            src={produto.imagem}
            alt={t(`productName_${produto.id}`)}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-1 hover:underline">
            {t(`productName_${produto.id}`)}
          </h2>
        </div>
        <p className="text-sm text-gray-300 mb-2 h-10 overflow-hidden">
          {t(`productDescription_${produto.id}`)}
        </p>
      </div>
      <div>
        <p className="text-gray-400 mb-4 mt-2">
          {t("currencySymbol")} {produto.preco.toFixed(2)}
        </p>
        <Button
          variant="primary"
          onClick={() =>
            alert(`${t("addToCartButton")} - ${t(`productName_${produto.id}`)}`)
          }
        >
          {t("addToCartButton")}
        </Button>
      </div>
    </div>
  );
};
